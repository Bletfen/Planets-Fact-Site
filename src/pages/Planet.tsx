import data from "../../data.json";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Details from "../components/Details";
import DescriptionSwitcher from "../components/DescriptionSwitcher";
import DescriptioTD from "../components/DescriptionTD";
import DescriptionText from "../components/DescriptionText";
export default function Planets() {
  const { planetName } = useParams();
  const planet = data.find((planet) => planet.name === planetName);
  const [activeDescription, setActiveDescription] =
    useState<string>("overview");
  return (
    <div
      className="pb-[4.8rem] md:pb-[3.6rem] xl:pb-[5.6rem]
      xl:pr-[16.5rem]"
    >
      <div
        className="flex flex-col xl:flex-row xl:justify-between
        xl:items-center xl:mt-[12.6rem]"
      >
        <div
          className="flex justify-between px-[2.4rem]
          text-[#fff] text-[0.9rem] font-[700] uppercase
          tracking-[1.929px] md:hidden mt-[2rem]"
        >
          <DescriptionSwitcher
            activeDescription={activeDescription}
            setActiveDescription={setActiveDescription}
            planetColor={planet?.color}
          />
        </div>
        <div
          className="w-full h-px opacity-[0.2] 
        bg-[#fff] relative bottom-[0.1rem] md:hidden
        xl"
        ></div>
        <div
          className="self-center xl:pl-[var(--desktop-padding)]"
          style={
            {
              "--desktop-padding": planet?.padding,
              "--mobile-mt": planet?.margin?.mobile,
              "--tablet-mt": planet?.margin?.tablet,
            } as React.CSSProperties
          }
        >
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
                my-[var(--mobile-mt)] md:my-[var(--tablet-mt)]
                xl:my-[unset]
              "
          />
        </div>
        <div
          className="flex justify-between 
            items-center gap-[6.9rem]
            xl:flex-col xl:items-start
            text-center text-[#fff]
            font-[400] px-[3.9rem] text-start
            xl:px-[unset]"
        >
          <div
            className="flex flex-col text-center mx-auto
              md:m-[unset] md:text-start"
          >
            <h2
              className="text-[4rem] font-[Antonio] 
                uppercase font-[400]
                mb-[1.6rem] w-full md:mb-[2.4rem] md:text-[4.8rem]
                xl:text-[8rem] xl:mb-[2.3rem]"
            >
              {planet?.name}
            </h2>
            {activeDescription === "overview" && (
              <DescriptionText
                content={planet?.overview.content}
                source={planet?.overview.source}
              />
            )}
            {(activeDescription === "structure" ||
              activeDescription === "Internal Structure") && (
              <DescriptionText
                content={planet?.structure.content}
                source={planet?.structure.source}
              />
            )}
            {(activeDescription === "surface" ||
              activeDescription === "Surface Geology") && (
              <DescriptionText
                content={planet?.geology.content}
                source={planet?.geology.source}
              />
            )}
          </div>
          <div
            className="hidden md:flex flex-col 
            w-full max-w-[35rem] gap-[1.6rem]"
          >
            <DescriptioTD
              color={planet?.color}
              activeDescription={activeDescription}
              setActiveDescription={setActiveDescription}
            />
          </div>
        </div>
      </div>
      <div
        className="text-[#fff] mt-[2.8rem]
        px-[2.4rem] md:px-[3.9rem] xl:px-[unset]
        uppercase grid gap-[0.8rem]
        md:grid-cols-4 md:gap-[1.1rem] md:mt-[2.7rem]
        xl:pl-[16.5rem] xl:gap-[3rem]
        xl:mt-[8.7rem]"
      >
        <Details label="ROTATION TIME" value={planet?.rotation} />
        <Details label="REVOLUTION TIME" value={planet?.revolution} />
        <Details label="RADIUS" value={planet?.radius} />
        <Details label="AVERAGE TEMP." value={planet?.temperature} />
      </div>
    </div>
  );
}
