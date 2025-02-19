import ProfileSection from "@/components/ProfileSection";
import About from "@/components/About";
import Achievements from "@/components/Achievements";
import Projects from "@/components/Projects";
import WorkExp from "@/components/WorkExp";
import Research from "@/components/Research";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="flex flex-col mx-2 my-4">
      <Navbar />
      <div className="flex flex-col gap-10 mx-14 my-3">
        <ProfileSection />
        <About />
        <WorkExp />
        <Projects />
        <Research />
        <Achievements />
      </div>
    </div>
  );
}
