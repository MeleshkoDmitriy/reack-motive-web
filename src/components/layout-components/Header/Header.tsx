import { Routes } from "@/reack-motive-web/src/constants/routes";
import { Link } from "react-router-dom";
import "../../../styles/global.less";
import styles from "./Header.module.less";
import { ReactIcon, ReactRouterIcon, TanStackQuery } from "../../icons";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.icons}>
            <ReactIcon className={styles.icon} />
            <ReactRouterIcon className={styles.icon} />
            <TanStackQuery className={styles.icon} />
          </div>
          <nav className={styles.nav}>
            <Link to={Routes.CHARACTERS} className={styles.link}>
              CHARACTERS
            </Link>
            <Link to={Routes.FAVORITES} className={styles.link}>
              FAVORITES
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};
