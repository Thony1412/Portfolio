import Image from "next/image";
import Profile from "@/components/Profile";
import Project from "@/components/Project";
import Skills from "@/components/Skills";

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
    </>
  );
}