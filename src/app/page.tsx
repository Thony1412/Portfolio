import Profile from "@/components/Profile";
import Project from "@/components/Project";
import Skills from "@/components/Skills";
import About from "@/components/About";

export default function Home() {
  return (
    <>
      <Profile />
      <div id="project">
        <Project />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="about">
        <About></About>
      </div>
    </>
  );
}