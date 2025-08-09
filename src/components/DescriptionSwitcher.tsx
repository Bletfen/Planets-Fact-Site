import data from "../../data.json";
import { useParams } from "react-router-dom";
export default function DescriptionSwitcher({
  activeDescription,
  setActiveDescription,
}: {
  activeDescription: string;
  setActiveDescription: React.Dispatch<React.SetStateAction<string>>;
}) {
  const descriptionArray = ["overview", "structure", "surface"];
  const clickHandle = (description: string) => {
    setActiveDescription(description);
  };
  const { planetName } = useParams();
  const planet = data.find((planet) => planet.name === planetName);
  return (
    <div>
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
  );
}
