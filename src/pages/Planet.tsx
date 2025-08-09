import data from "../../data.json";
import { useParams } from "react-router-dom";
export default function Planets() {
  const { planetName } = useParams();
  const planet = data.find((planet) => planet.name === planetName);
  return (
    <div>
      <div>
        <div className="flex justify-between">
          <div>
            <span className="cursor-[pointer]">OVERVIEW</span>
          </div>
          <div>
            <span className="cursor-[pointer]">STRUCTURE</span>
          </div>
          <div>
            <span className="cursor-[pointer]">SURFACE</span>
          </div>
        </div>
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
          <p>{planet?.overview.content}</p>
          <span>{planet?.overview.source}</span>
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
