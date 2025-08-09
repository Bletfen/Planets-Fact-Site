import { Outlet, useNavigate, useLocation } from "react-router-dom";
import Header from "../components/Header";
import { useEffect } from "react";

const navigationLinks: string[] = [
  "/Mercury",
  "/Venus",
  "/Earth",
  "/Mars",
  "/Jupiter",
  "/Saturn",
  "/Uranus",
  "/Neptune",
];
export default function Layout() {
  const location = useLocation();
  const pathName = location.pathname;
  const navigate = useNavigate();
  useEffect(() => {
    if (navigationLinks.includes(pathName)) {
      navigate(pathName);
    } else {
      navigate("/Earth");
    }
  }, []);
  return (
    <div
      className="bg-[#070724] h-screen 
    bg-[url(./assets/background-stars.svg)]"
    >
      <Header />
      <Outlet />
    </div>
  );
}
