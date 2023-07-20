import { NavLink } from "react-router-dom";
import Logo from "../assets/Giphy.png";

export default function Layout() {
  return (
    <div className="flex flex-col m-auto items-center justify-center h-screen gap-5">
      <h1 className="text-3xl font-bold mb-5">WELCOME TO YOUR GIPHY</h1>
      <img alt="GAMBAR" src={Logo} className="w-3/12 mb-5" />
      <NavLink className="underline text-blue-700" to={"/ironman"}>
        IRON MAN GIPHY
      </NavLink>
      <NavLink className="underline text-blue-700" to={"/search"}>
        SEARCH YOUR GIPHY
      </NavLink>
    </div>
  );
}
