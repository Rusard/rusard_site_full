import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productsRepository: Repository<Product>
  ) {}

  async create(createProductDto: CreateProductDto) {
    const slug = await this.generateUniqueSlug(createProductDto.slug ?? createProductDto.name);
    const product = this.productsRepository.create({
      ...createProductDto,
      slug,
      price: Number(createProductDto.price)
    });
    return this.productsRepository.save(product);
  }

  findAll() {
    return this.productsRepository.find({
      where: { isActive: true },
      order: { createdAt: 'DESC' }
    });
  }

  async findOne(idOrSlug: string) {
    const product = await this.productsRepository.findOne({
      where: [{ id: idOrSlug }, { slug: idOrSlug }]
    });
    if (!product) {
      throw new NotFoundException(`Produit ${idOrSlug} introuvable`);
    }
    return product;
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    const product = await this.findOne(id);
    if (updateProductDto.slug || updateProductDto.name) {
      const slugSource = updateProductDto.slug ?? updateProductDto.name ?? product.name;
      product.slug = await this.generateUniqueSlug(slugSource, product.id);
    }
    Object.assign(product, {
      ...updateProductDto,
      price: updateProductDto.price !== undefined ? Number(updateProductDto.price) : product.price
    });
    return this.productsRepository.save(product);
  }

  async remove(id: string) {
    const product = await this.findOne(id);
    return this.productsRepository.remove(product);
  }

  private async generateUniqueSlug(source: string, ignoreProductId?: string) {
    const baseSlug = this.slugify(source);
    let slug = baseSlug;
    let suffix = 1;

    // eslint-disable-next-line no-constant-condition
    while (true) {
      const existing = await this.productsRepository.findOne({
        where: { slug }
      });

      if (!existing || (ignoreProductId && existing.id === ignoreProductId)) {
        return slug;
      }

      slug = `${baseSlug}-${suffix}`;
      suffix += 1;
    }
  }

  private slugify(value: string) {
    return value
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-zA-Z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '')
      .toLowerCase();
  }
}
