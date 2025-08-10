import { Link } from "react-router-dom";
import data from "../../data.json";
export default function OrdinaryMenu() {
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
            <Link to={element.name}>
              <span>{element.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
