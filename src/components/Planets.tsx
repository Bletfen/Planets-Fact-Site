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
          <img src={planet?.images.planet} alt="" />
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
