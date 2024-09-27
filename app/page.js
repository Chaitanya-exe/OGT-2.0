
import Tabs from "@/components/Tabs";
import Video from "@/components/Video";
import HeroSection from "@/components/HeroSection";
import Sphere from "@/components/Sphere";
import Index from "@/components/Steps/Index";
import Testimonials from "@/components/Steps/Testimonials";

export default function Home() {
 

  return (
    <main className="min-h-screen *:p-10  ">
      <HeroSection />
      <div>
        <Tabs direction="left" />
        <Tabs direction="right" />
      </div>
      <Video />
      <Sphere/>
      <Index/>
      <Testimonials/>


    </main>
  );
}
