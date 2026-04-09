import Dock from "@/components/Dock";
import Welcome from "@/components/Welcome";
import React from "react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import TerminalWindow from "@/windows/Terminal";
gsap.registerPlugin(Draggable);

const page = () => {
  return (
    <main>
      <Welcome />
      <Dock />
      <TerminalWindow />
    </main>
  );
};

export default page;
