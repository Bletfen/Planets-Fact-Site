export default function DescriptionTD({
  color,
  activeDescription,
  setActiveDescription,
}: {
  color: string | undefined;
  activeDescription: string;
  setActiveDescription: React.Dispatch<React.SetStateAction<string>>;
}) {
  const arrayOfDescription = [
    {
      value: "01",
      label: "overview",
    },
    {
      value: "02",
      label: "Internal Structure",
    },
    {
      value: "03",
      label: "Surface Geology",
    },
  ];
  const clickHandler = (description: string) => {
    setActiveDescription(description);
  };
  return (
    <div className="flex flex-col gap-[1.6rem]">
      {arrayOfDescription.map((description) => (
        <div
          className="pl-[2rem] py-[0.8rem] border solid border-[#fff]
      flex gap-[1.7rem]
      text-[0.9rem] font-[700] leading-[2.5] tracking-[1.929px] uppercase
      cursor-[pointer]"
          onClick={() => clickHandler(description.label)}
          style={{
            borderColor: "rgba(255, 255, 255, 0.2)",
            ...(activeDescription === description.label && {
              backgroundColor: color,
            }),
          }}
        >
          <span className="opacity-[0.5]">{description.value}</span>
          <span>{description.label}</span>
        </div>
      ))}
    </div>
  );
}
