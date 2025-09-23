import FeaturedProperty from "@/components/Home/FeaturedProperty";
import Hero from "@/components/Home/Hero";
import Properties from "@/components/Home/Properties";
import Services from "@/components/Home/Services";
import TimeLine from "@/components/Home/TimeLine";
import Amenities from "@/components/Home/Amenities";
import Testimonial from "@/components/Home/Testimonial";
import GetInTouch from "@/components/Home/GetInTouch";
import DaNangDowntown from "@/components/DaNangDowntown";
import VillaShowcase from "@/components/DaNangDowntown/VillaShowcase";

export default function Home() {
  return (
    <main className="bg-gradient-to-br from-blue-50 to-white">
      <Hero />
      <DaNangDowntown />
      <Services />
      <FeaturedProperty />
      <TimeLine />
      <Amenities />
      <VillaShowcase />
      <Properties />
      <Testimonial />
      {/* <BlogSmall /> */}
      <GetInTouch />
    </main>
  );
}
