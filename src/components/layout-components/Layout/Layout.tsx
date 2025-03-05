import { Outlet } from "react-router-dom";
import "../../../styles/global.less";
import { Header } from "../../../components";

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
