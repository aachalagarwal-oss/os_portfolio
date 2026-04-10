"use client";

import React from "react";
import WindowControls from "@/components/WindowControls";
import WindowWrapper from "@/hoc/WindowWrapper";
import usewindowstore from "@/store/window";

const ImgFile = () => {
  const { windows } = usewindowstore();
  const data = windows?.imgfile?.data;

  if (!data) return null;

  const { name, imageUrl } = data;

  return (
    <>
      <div id="window-header">
        <WindowControls target="imgfile" />
        <h2>{name}</h2>
      </div>

      <div className="imgfile-window">
        {imageUrl && <img src={imageUrl} alt={name} />}
      </div>
    </>
  );
};

const ImgFileWindow = WindowWrapper(ImgFile, "imgfile");
export default ImgFileWindow;
