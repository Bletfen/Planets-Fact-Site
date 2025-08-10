type DetailProps = {
  label: string;
  value: string | number | undefined;
};
export default function Details({ label, value }: DetailProps) {
  return (
    <div
      className="border solid border-[#fff]
        px-[2.4rem] pt-[0.9rem] pb-[1.3rem]
        flex items-center justify-between
        md:flex-col md:items-start md:gap-[0.6rem]
        md:pl-[1.5rem] md:pt-[1.6rem] md:pb-[1.9rem]
        xl:pl-[2.3rem] xl:pt-[2rem] xl:pb-[2.7rem]"
      style={{ borderColor: "rgba(255, 255, 255, 0.2)" }}
    >
      <span
        className="text-[0.8rem] font-[700]
          leading-[1.6rem] tracking-[0.727px] opacity-[0.5]
          font-league xl:text-[1.1rem] xl:leading-[2.5rem]
          xl:tracking-[0.1rem]"
      >
        {label}
      </span>
      <span
        className="text-[2rem] font-[Antonio]
          tracking-[-0.75px] font-[400]
          md:text-[2.4rem] md:tracking-[-0.9px]
          xl:text-[4rem] xl:tracking-[-1.5px]"
      >
        {value}
      </span>
    </div>
  );
}
