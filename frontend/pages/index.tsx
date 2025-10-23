import { HighlightsSection } from "@/components/HighlightsSection";
import { HeroSection } from "@/components/HeroSection";
import { Layout } from "@/components/Layout";
import { ServiceGridSection } from "@/components/ServiceGridSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <ServiceGridSection />
      <HighlightsSection />
      <TestimonialsSection />
    </Layout>
  );
}
