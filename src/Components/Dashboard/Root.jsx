import { Outlet } from "react-router-dom";
import { useState } from "react";

import AdminSidebar from "./Sidebar/AdminSidebar";
import MainHeader from "./MainHeader";
import { LuPanelRightClose } from "react-icons/lu";
import { MdOutlineMenu } from "react-icons/md";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { LuPanelLeftClose } from "react-icons/lu";
const Root = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const mainContentClass = collapsed ? "lg:ml-[80px]" : "lg:ml-[270px]";

  return (
    <div className="relative flex h-screen overflow-hidden bg-white">
      {/* Mobile hamburger */}
      <button
        className="absolute top-4 left-4 z-50 lg:hidden text-2xl text-[#1E3A8A]"
        onClick={() => setMobileOpen(true)}
      >
        <MdOutlineMenu />
      </button>

      {/* Desktop Sidebar */}
      <div
        className={`transition-all duration-300 h-screen bg-white border border-[#E8E8E8] fixed top-0 left-0 z-40
        ${collapsed ? "w-[80px]" : "w-[270px]"} hidden lg:block`}
      >
        <button
          onClick={() => setCollapsed(!collapsed)}
          className={`absolute  base-color p-1 ${
            collapsed
              ? "top-[76px] right-[1.75rem]"
              : "top-[87px] right-[0.75rem] "
          }`}
        >
          {collapsed ? (
            <LuPanelLeftClose size={20} />
          ) : (
            <LuPanelRightClose size={17} />
          )}
        </button>

        <AdminSidebar collapsed={collapsed} />
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div className="bg-white w-[270px] h-full border border-[#E8E8E8] p-0 relative overflow-hidden">
            <button
              className="absolute top-4 right-4 text-2xl text-[#1E3A8A]"
              onClick={() => setMobileOpen(false)}
            >
              ✕
            </button>

            <AdminSidebar collapsed={false} />
          </div>

          <div
            className="flex-1 bg-black bg-opacity-30"
            onClick={() => setMobileOpen(false)}
          />
        </div>
      )}

      {/* Main Content */}
      <div
        className={`flex-1  w-screen flex flex-col transition-all duration-300 ${mainContentClass}`}
      >
        <MainHeader />
        <main className="flex-1 p-4 user overflow-y-auto bg-[#fbf9f7]">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Root;
