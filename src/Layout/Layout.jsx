import { Outlet } from "react-router-dom";
import SideMenu from "../components/Layout/SideMenu";

const Layout = () => {
  return (
    <div className="flex flex-row h-screen">
      {/* sidebar */}
      <SideMenu />
      {/* Content Area */}
      <div className="p-3 bg-black w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
