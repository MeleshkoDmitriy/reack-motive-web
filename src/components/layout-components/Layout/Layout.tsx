import { Outlet } from "react-router-dom";
import "../../../styles/global.less";
import styles from "./Layout.module.less";
import { Header } from "../../../components";

export const Layout = () => {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={`${styles.wrapper} container`}>
        <Outlet />
      </main>
    </div>
  );
};
