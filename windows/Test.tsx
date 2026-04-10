"use client";

import React from "react";
import WindowControls from "@/components/WindowControls";
import WindowWrapper from "@/hoc/WindowWrapper";
import usewindowstore from "@/store/window";

const TxtFile = () => {
  const { windows } = usewindowstore();
  const data = windows?.txtfile?.data;

  if (!data) return null;

  const { name, image, subtitle, description } = data;
  const descriptionItems = Array.isArray(description)
    ? description
    : description
    ? [description]
    : [];

  return (
    <>
      <div id="window-header">
        <WindowControls target="txtfile" />
        <h2>{name}</h2>
      </div>

      <div className="txtfile-window">
        {image && (
          <div className="txtfile-image-wrapper">
            <img src={image} alt={name} />
          </div>
        )}

        {subtitle && <p className="subtitle">{subtitle}</p>}

        {descriptionItems.length > 0 ? (
          <div className="description">
            {descriptionItems.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        ) : null}
      </div>
    </>
  );
};

const TxtFileWindow = WindowWrapper(TxtFile, "txtfile");
export default TxtFileWindow;
