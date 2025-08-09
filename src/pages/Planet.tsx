import data from "../../data.json";
import { useParams } from "react-router-dom";
import { useState } from "react";
export default function Planets() {
  const { planetName } = useParams();
  const planet = data.find((planet) => planet.name === planetName);
  const [activeDescription, setActiveDescription] =
    useState<string>("overview");
  const descriptionArray = ["overview", "sturcture", "surface"];
  const clickHandle = (description: string) => {
    setActiveDescription(description);
  };
  return (
    <div className="">
      <div>
        <div className="flex justify-between">
          {descriptionArray.map((description) => (
            <div
              key={description}
              className="cursor-[pointer]"
              onClick={() => clickHandle(description)}
            >
              <span>{description}</span>
              {activeDescription === description && (
                <div
                  className="h-[0.4rem] w-full mt-[1.7rem]"
                  style={{ backgroundColor: planet?.color }}
                ></div>
              )}
            </div>
          ))}
        </div>
        <div className="w-full h-px opacity-[0.2] bg-[#fff] relative bottom-[0.1rem]"></div>
        <div>
          <img
            src={planet?.images.planet}
            alt="planet-icon"
            style={
              {
                "--mobile-width": planet?.images.sizes.mobile.width,
                "--mobile-height": planet?.images.sizes.mobile.height,
                "--tablet-width": planet?.images.sizes.tablet.width,
                "--tablet-height": planet?.images.sizes.tablet.height,
                "--desktop-width": planet?.images.sizes.desktop.width,
                "--desktop-height": planet?.images.sizes.desktop.height,
              } as React.CSSProperties
            }
            className="
                w-[var(--mobile-width)] h-[var(--mobile-height)]
                md:w-[var(--tablet-width)] md:h-[var(--tablet-height)]
                xl:w-[var(--desktop-width)] xl:h-[var(--desktop-height)]
              "
          />
        </div>
        <div>
          <h2>{planet?.name}</h2>
          {activeDescription === "overview" && (
            <>
              <p>{planet?.overview.content}</p>
              <span>{planet?.overview.source}</span>
            </>
          )}
          {activeDescription === "structure" && (
            <>
              <p>{planet?.structure.content}</p>
              <span>{planet?.structure.source}</span>
            </>
          )}
          {activeDescription === "surface" && (
            <>
              <p>{planet?.geology.content}</p>
              <span>{planet?.geology.source}</span>
            </>
          )}
        </div>
      </div>
      <div>
        <div>
          <span>ROTATION TIME</span>
          <span>{planet?.rotation}</span>
        </div>
        <div>
          <span>REVOLUTION TIME</span>
          <span>{planet?.revolution}</span>
        </div>
        <div>
          <span>radius</span>
          <span>{planet?.radius}</span>
        </div>
        <div>
          <span>AVERAGE TEMP.</span>
          <span>{planet?.temperature}</span>
        </div>
      </div>
    </div>
  );
}
