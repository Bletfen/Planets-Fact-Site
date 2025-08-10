import { Link, useLocation } from "react-router-dom";
import data from "../../data.json";
export default function OrdinaryMenu() {
  const location = useLocation();
  const currentPage = location.pathname.slice(1);
  return (
    <div>
      <ul
        className="hidden md:flex gap-[3.3rem] justify-center text-[#fff]
      px-[5.1rem] text-[1.1rem] font-[700] leading-[2.5rem]
      tracking-[0.1rem] uppercase mt-[3.9rem]
      xl:p-[unset] xl:m-[unset] font-league"
      >
        {data.map((element) => (
          <li key={element.name}>
            <Link to={element.name} className="relative group">
              {currentPage === element.name && (
                <div
                  className="hidden xl:flex h-[0.4rem] w-full mt-[1.7rem]
                  absolute bottom-18 left-0"
                  style={{ backgroundColor: element.color }}
                ></div>
              )}
              <div
                className="hidden xl:flex h-[0.4rem] w-full mt-[1.7rem]
                absolute bottom-18 left-0 opacity-0 group-hover:opacity-100
                transition-opacity"
                style={{ backgroundColor: element.color }}
              ></div>
              <span>{element.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
