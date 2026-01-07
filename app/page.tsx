import Scene from "@/components/3d/Scene";
import Hero from "@/components/sections/Hero";
import TheSpace from "@/components/sections/TheSpace";
import TrainingZones from "@/components/sections/TrainingZones";
import Amenities from "@/components/sections/Amenities";
import FoundersOffer from "@/components/sections/FoundersOffer";
import Footer from "@/components/sections/Footer";
import Navigation from "@/components/sections/Navigation";
import Membership from "@/components/sections/Membership";
import Testimonials from "@/components/sections/Testimonials";
import LocationSection from "@/components/sections/LocationSection";

export default function Home() {
  return (
    <main className="relative w-full min-h-screen">
      <Navigation />
      <Scene />

      <Hero id="hero" />
      <TheSpace id="about" />
      <TrainingZones id="services" />
      <Membership id="membership" />
      <Amenities />
      <Testimonials id="testimonials" />
      <FoundersOffer />
      <LocationSection />
      <Footer id="contact" />
    </main>
  );
}
