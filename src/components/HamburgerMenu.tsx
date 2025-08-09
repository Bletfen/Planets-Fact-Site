import { Link } from "react-router-dom";
import data from "../../data.json";
export default function HamburgerMenu({ isOpen }: { isOpen: boolean }) {
  if (!isOpen) return null;
  return (
    <ul
      className="absolute bg-[#070724]
    w-full z-[1] md:hidden"
    >
      {data.map((element) => (
        <li key={element.name} className="flex flex-col gap-[2rem]">
          <Link
            to={element.name}
            className="flex items-center
          justify-between mt-[2rem] px-[2.4rem]
          text-[#fff]"
          >
            <div className="flex gap-[2.5rem] items-center">
              <div
                className="w-[2rem] h-[2rem] rounded-full"
                style={{ backgroundColor: element.color }}
              ></div>
              {element.name}
            </div>
            <svg
              width="6"
              height="10"
              viewBox="0 0 6 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path opacity="0.4" d="M1 1L5 5L1 9" stroke="white" />
            </svg>
          </Link>
          <div
            className="h-px bg-[#fff] opacity-[0.1]
          w-full"
          ></div>
        </li>
      ))}
    </ul>
  );
}
