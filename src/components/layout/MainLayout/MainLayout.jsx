import { Header } from "./Header/Header";
import { Outlet } from "react-router-dom";
import { SideBar } from "./Sidebar/SiderBar";
import { Footer } from "./Footer/Footer";
import "./main-layout.css"
export const MainLayout = () => {
  return (
    <>
      <Header />

      <div className="main-layout__block">
        <SideBar />
        <main className="main-layout-main">
          <Outlet />
        </main>
      </div>

      <Footer />
    </>
  );
};
