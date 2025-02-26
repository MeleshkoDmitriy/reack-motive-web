import { Routes } from "@/reack-motive-web/src/constants/routes";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <nav>
        <Link to={Routes.CHARACTERS}>CHARACTERS</Link>
        <Link to={Routes.FAVORITES}>FAVORITES</Link>
      </nav>
    </header>
  );
};
