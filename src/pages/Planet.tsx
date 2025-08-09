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
    <div className="pb-[4.8rem]">
      <div className="flex flex-col">
        <div
          className="flex justify-between px-[2.4rem]
        text-[#fff] text-[0.9rem] font-[700] uppercase
        tracking-[1.929px]"
        >
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
        <div className="mt-[9.5rem] mb-[9.8rem] self-center">
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
        <div
          className="flex flex-col text-center text-[#fff]
        font-[400] px-[2.4rem]"
        >
          <h2 className="text-[4rem] font-[Antonio] uppercase">
            {planet?.name}
          </h2>
          {activeDescription === "overview" && (
            <>
              <p className="text-[1.1rem] leading-[2.2rem] mb-[3.2rem]">
                {planet?.overview.content}
              </p>
              <p className="text-[1.2rem] opacity-[0.5] flex self-center items-center gap-[0.4rem]">
                Source :
                <a
                  href={planet?.overview.source}
                  className="font-[700] underline flex items-center gap-[0.4rem]"
                >
                  Wikipedia
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="cursor-[pointer]"
                  >
                    <path
                      opacity="0.5"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9.75002 0C10.3698 0 10.8998 0.220059 11.3397 0.660095C11.7797 1.10013 11.9998 1.63022 11.9998 2.24998V9.74994C11.9998 10.3697 11.7797 10.8997 11.3396 11.3398C10.8997 11.7799 10.3697 12 9.74994 12H2.24998C1.63025 12 1.10021 11.7799 0.660095 11.3398C0.220059 10.8997 0 10.3696 0 9.74994V2.24998C0 1.63022 0.220059 1.10021 0.660095 0.660095C1.10021 0.220059 1.63025 0 2.24998 0H9.75002ZM9.69524 6.71084C9.89825 6.62224 9.99996 6.46867 9.99996 6.24993H9.99999V2.49998C9.99999 2.36455 9.95051 2.24733 9.85165 2.14843C9.75254 2.04943 9.63531 1.9999 9.49991 1.9999H5.75007C5.53133 1.9999 5.3776 2.10156 5.2891 2.30463C5.20061 2.51825 5.23703 2.70044 5.39853 2.85149L6.52354 3.97647L2.35161 8.14845C2.25264 8.24734 2.20313 8.36459 2.20313 8.49988C2.20313 8.63522 2.25264 8.75264 2.35161 8.85142L3.14847 9.64842C3.24742 9.74731 3.36461 9.79687 3.50012 9.79687C3.63557 9.79687 3.75266 9.74731 3.85174 9.64842L8.02342 5.47649L9.14835 6.60147C9.24218 6.70033 9.3594 6.74989 9.49989 6.74989C9.56228 6.74989 9.62762 6.73686 9.69524 6.71084Z"
                      fill="white"
                    />
                  </svg>
                </a>
              </p>
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
      <div
        className="text-[#fff] px-[2.4rem] mt-[2.8rem]
      uppercase flex flex-col gap-[0.8rem]"
      >
        <div
          className="border solid border-[#fff]
        px-[2.4rem] pt-[0.9rem] pb-[1.3rem]
        flex items-center justify-between"
          style={{ borderColor: "rgba(255, 255, 255, 0.2)" }}
        >
          <span
            className="text-[0.8rem] font-[700]
          leading-[1.6rem] tracking-[0.727px] opacity-[0.5]"
          >
            ROTATION TIME
          </span>
          <span
            className="text-[2rem] font-[Antonio]
          tracking-[-0.75px] font-[400]"
          >
            {planet?.rotation}
          </span>
        </div>
        <div
          className="border solid border-[#fff]
        px-[2.4rem] pt-[0.9rem] pb-[1.3rem]
        flex items-center justify-between"
          style={{ borderColor: "rgba(255, 255, 255, 0.2)" }}
        >
          <span
            className="text-[0.8rem] font-[700]
          leading-[1.6rem] tracking-[0.727px] opacity-[0.5]"
          >
            REVOLUTION TIME
          </span>
          <span
            className="text-[2rem] font-[Antonio]
          tracking-[-0.75px] font-[400]"
          >
            {planet?.revolution}
          </span>
        </div>
        <div
          className="border solid border-[#fff]
        px-[2.4rem] pt-[0.9rem] pb-[1.3rem]
        flex items-center justify-between"
          style={{ borderColor: "rgba(255, 255, 255, 0.2)" }}
        >
          <span
            className="text-[0.8rem] font-[700]
          leading-[1.6rem] tracking-[0.727px] opacity-[0.5]"
          >
            radius
          </span>
          <span
            className="text-[2rem] font-[Antonio]
          tracking-[-0.75px] font-[400]"
          >
            {planet?.radius}
          </span>
        </div>
        <div
          className="border solid border-[#fff]
        px-[2.4rem] pt-[0.9rem] pb-[1.3rem]
        flex items-center justify-between"
          style={{ borderColor: "rgba(255, 255, 255, 0.2)" }}
        >
          <span
            className="text-[0.8rem] font-[700]
          leading-[1.6rem] tracking-[0.727px] opacity-[0.5]"
          >
            AVERAGE TEMP.
          </span>
          <span
            className="text-[2rem] font-[Antonio]
          tracking-[-0.75px] font-[400]"
          >
            {planet?.temperature}
          </span>
        </div>
      </div>
    </div>
  );
}
