import { Link } from "react-router-dom";
import data from "../../data.json";
export default function HamburgerMenu({ isOpen }: { isOpen: boolean }) {
  if (!isOpen) return null;
  return (
    <ul className="mt-[4.4rem]">
      {data.map((element) => (
        <li key={element.name}>
          <Link to={element.name}>{element.name}</Link>
        </li>
      ))}
    </ul>
  );
}
