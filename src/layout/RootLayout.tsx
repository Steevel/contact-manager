import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-6 h-[92vh]">
        <div className="col-span-2 md:col-span-1">
          <Sidebar />
        </div>
        <div className="col-span-4 md:col-span-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default RootLayout;
