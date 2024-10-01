
import Tabs from "@/components/Tabs";
import HeroSection from "@/components/HeroSection";
import Sphere from "@/components/Sphere";
import Index from "@/components/Steps/Index";
import Testimonials from "@/components/Steps/Testimonials";
import EgVideo from "@/components/EgVideo";

export default function Home() {
 

  return (
    <main className="min-h-screen *:p-10  ">
      <HeroSection />
      <div>
        <Tabs direction="left" />
        <Tabs direction="right" />
      </div>
      <EgVideo />
      <Sphere/>
      <Index/>
      <Testimonials/>


    </main>
  );
}
