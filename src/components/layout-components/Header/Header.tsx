import { Routes } from "@/reack-motive-web/src/constants/routes";
import { Link } from "react-router-dom";
import '../../../styles/global.less'

export const Header = () => {
  return (
    <header>
      <nav className="container">
        <Link to={Routes.CHARACTERS}>CHARACTERS</Link>
        <Link to={Routes.FAVORITES}>FAVORITES</Link>
      </nav>
    </header>
  );
};
