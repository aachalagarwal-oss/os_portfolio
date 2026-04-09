"use client";

import React from "react";
import WindowWrapper from "../hoc/WindowWrapper";
import { techStack } from "@/constants";
import { Check } from "lucide";
const Terminal = () => {
  return (
    <>
      <div id="window-header">
        <p>Window controls</p>
        <h2>Tech Stack</h2>
      </div>

      <div className="techstack">
        <p>
          <span className="font-bold">@adrian%</span>
        </p>

        <div className="label">
          <p className="w-32">Category</p>
          <p>Technologies</p>
        </div>
        <ul className="content">
          {techStack.map(({ category, items }) => (
            <li key={category} className="flex items-center">
              <Check className="check" size={20} />
              <h3>{category}</h3>
              <ul>
                {items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const TerminalWindow = WindowWrapper(Terminal, "terminal");
export default TerminalWindow;
