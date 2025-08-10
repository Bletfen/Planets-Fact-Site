export default function DescriptionSwitcher({
  activeDescription,
  setActiveDescription,
  planetColor,
}: {
  activeDescription: string;
  setActiveDescription: React.Dispatch<React.SetStateAction<string>>;
  planetColor: string | undefined;
}) {
  const descriptionArray = ["overview", "structure", "surface"];
  const clickHandle = (description: string) => {
    setActiveDescription(description);
  };
  return (
    <div className="flex justify-between w-full">
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
              style={{ backgroundColor: planetColor }}
            ></div>
          )}
        </div>
      ))}
    </div>
  );
}
