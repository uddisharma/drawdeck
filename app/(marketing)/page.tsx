import { FooterSection } from "./_components/footer";
import { HeroSection } from "./_components/hero";
import HeroGeometric from "./_components/new-section";
import { SponsorsSection } from "./_components/sponsors";

export default function Home() {
  return (
    <>
      <HeroSection />
      {/* <HeroGeometric /> */}
      <SponsorsSection />
      <FooterSection />
    </>
  );
}
