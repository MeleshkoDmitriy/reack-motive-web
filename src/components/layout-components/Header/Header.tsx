import { Routes } from "@/reack-motive-web/src/constants/routes";
import "../../../styles/global.less";
import styles from "./Header.module.less";
import { ReactIcon, ReactRouterIcon, TanStackQuery } from "../../icons";
import { HeaderLink } from "./header-link/HeaderLink";

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
            {/* <Link to={Routes.CHARACTERS} className={styles.link}>
              CHARACTERS
            </Link>
            <Link to={Routes.FAVORITES} className={styles.link}>
              FAVORITES
            </Link> */}
            {Object.entries(Routes).map(([key, value]) => (
              <HeaderLink to={value} key={key}>
                {key}
              </HeaderLink>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};
