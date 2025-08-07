import HamburgerMenu from "./HamburgerMenu";
import { useState } from "react";
export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="flex justify-between items-center">
      <h1>THE PLANETS</h1>
      <svg
        width="24"
        height="17"
        viewBox="0 0 24 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="cursor-[pointer]"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <g opacity="0.248746">
          <rect width="24" height="3" fill="white" />
          <rect y="7" width="24" height="3" fill="white" />
          <rect y="14" width="24" height="3" fill="white" />
        </g>
      </svg>
      <HamburgerMenu isOpen={isOpen} />
    </div>
  );
}
