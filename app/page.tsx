
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

import { Welcome, Dock} from "@/components";

import TerminalWindow from "@/windows/Terminal";
import SafariWindow from "@/windows/Safari";
import ResumeWindow from "@/windows/Resume";
import Finder from "@/windows/Finder";
import { TxtFile, ImgFile, Contact } from "@/windows";
import Home from "@/components/Home";
gsap.registerPlugin(Draggable);

const page = () => {
  return (
    <main>
      <Welcome />
      <Dock />
      <TerminalWindow />
      <SafariWindow/>
      <ResumeWindow/>
      <Finder/>
      <TxtFile />
      <ImgFile />
      <Contact/>
      <Home/>
    </main>
  );
};

export default page;
