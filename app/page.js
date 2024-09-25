
import Tabs from "@/components/Tabs";
import Video from "@/components/Video";
import HeroSection from "@/components/HeroSection";
import Sphere from "@/components/Sphere";

export default function Home() {
 

  return (
    <main className="min-h-screen *:p-10 ">
      <HeroSection />
      <div>
        <Tabs direction="left" />
        <Tabs direction="right" />
      </div>
      <Video />
      <Sphere/>

    </main>
  );
}
