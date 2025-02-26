import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import "../../../styles/global.less";

export const Layout = () => {
  return (
    <div>
      <Header />
      <main className="container">
        <Outlet />
      </main>
    </div>
  );
};
