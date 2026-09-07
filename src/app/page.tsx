import { Footer } from "@/components/Footer/Footer";
import { Hero } from "@/components/Hero/Hero";
import { Mission } from "@/components/Mission/Mission";
import { Pillars } from "@/components/Pillars/Pillars";

export default function Home() {
  return (
    <main>
      <Hero />
      <Pillars />
      <Mission />
      <Footer />
    </main>
  );
}
