import HamburgerMenu from "./HamburgerMenu";
import { useState } from "react";
import OrdinaryMenu from "./OrdinaryMenu";
export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div>
      <div
        className="xl:flex xl:justify-between
    xl:pl-[3.2rem] xl:pr-[4.1rem]
    xl:pt-[2.2rem] xl:pb-[2.7rem] xl:items-center
    max-w-[144rem] xl:mx-[auto]"
      >
        <div
          className="flex justify-between items-center
      py-[1.6rem] px-[2.4rem] md:justify-center
      md:py-[unset] md:pt-[3.2rem] xl:p-[unset]"
        >
          <h1
            className="text-[#fff] text-[2.8rem] font-[400]
        font-[Antonio] tracking-[-1.05px]"
          >
            THE PLANETS
          </h1>
          <svg
            width="24"
            height="17"
            viewBox="0 0 24 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="cursor-[pointer] md:hidden shrink-0"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <g opacity="0.248746">
              <rect width="24" height="3" fill="white" />
              <rect y="7" width="24" height="3" fill="white" />
              <rect y="14" width="24" height="3" fill="white" />
            </g>
          </svg>
        </div>
        <OrdinaryMenu />
      </div>
      <div
        className="w-full h-px opacity-[0.2] bg-[#fff]
      md:mt-[2.7rem] xl:m-[unset]"
      ></div>
      <HamburgerMenu isOpen={isOpen} />
    </div>
  );
}
