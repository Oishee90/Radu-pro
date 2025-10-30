import { FaSignOutAlt } from "react-icons/fa";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import { FiHome } from "react-icons/fi";
import { PiStudentBold } from "react-icons/pi";
import { BiRevision } from "react-icons/bi";
import { FaRegCalendarCheck } from "react-icons/fa";
import { GrResources } from "react-icons/gr";
import logo from "../../../assets/logo.png";
import { GoPeople } from "react-icons/go";
import { MdCheckCircleOutline } from "react-icons/md";
import { MdOutlinePayment } from "react-icons/md";
import { BsBoxSeam } from "react-icons/bs";
import { MdOutlineFeedback } from "react-icons/md";
import { MdOutlineSubscriptions } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
const AdminSidebar = ({ collapsed }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActiveDashboard =
    location.pathname.startsWith("/") ||
    location.pathname.startsWith("/dashboard/theme");
  const isActiveAllLesson = location.pathname.startsWith(
    "/dashboard/all-lesson-plan"
  );
  const isActiveStudent =
    location.pathname.startsWith("/dashboard/student-management") ||
    location.pathname.startsWith("/dashboard/observation") ||
    location.pathname.startsWith("/dashboard/weekly-goal") ||
    location.pathname.startsWith("/dashboard/progress") ||
    location.pathname.startsWith("/dashboard/generate");
  const isActiveRsource = location.pathname.startsWith("/dashboard/resource");

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    navigate("/login", { replace: true });
  };

  return (
    <div className="bg-[#FFFFFF] border-r-2 border-r-[#ced1d6] min-h-screen flex flex-col justify-between outfit">
      {/* Logo */}
      <div className="flex flex-col py-4">
        <Link to="/">
          <div
            className={`flex items-center gap-2  pt-2 pb-4 cursor-pointer ${
              collapsed ? "px-0" : "px-6 "
            }`}
          >
            <img src={logo} alt="Logo" className="mb-2" />
          </div>
        </Link>

        {/* Menu Items */}
        <nav className="flex flex-col text-[#364636]">
          {/* Lesson Plan */}
          <NavLink
            to="/"
            className="flex items-center justify-between w-[280px]"
          >
            <div className="flex items-center justify-between w-[280px] font-medium   pb-3 pt-7">
              <div
                className={`flex items-center space-x-2 justify-start gap-2  p-5 text-center ${
                  collapsed ? "w-[77px] h-[40px]" : "w-[267px] h-[50px] "
                }  ${isActiveDashboard ? "orange text-white " : "base-color"}`}
              >
                <FiHome className="w-[24px] h-[24px] " />
                {!collapsed && (
                  <h1 className="text-[20px] font-medium ">Dashboard</h1>
                )}
              </div>
            </div>
          </NavLink>

          {/*   User Management */}
          <NavLink
            to="/user-management"
            className="flex items-center justify-between w-[280px]"
          >
            <div className="flex items-center justify-between w-[280px] font-medium pb-3  ">
              <div
                className={`flex items-center space-x-2 justify-start gap-2  p-5 text-center ${
                  collapsed ? "w-[63px] h-[40px]" : "w-[250px] h-[50px] "
                } ${
                  isActiveAllLesson
                    ? "orange text-[#FAF1E6] rounded-xl"
                    : "base-color"
                }`}
              >
                <GoPeople className="w-[24px] h-[24px] montserrat" />
                {!collapsed && (
                  <h1 className="text-[20px] font-medium ">User Management</h1>
                )}
              </div>
            </div>
          </NavLink>

          {/*  Content Moderation */}
          <NavLink
            to="/content-moderation"
            className="flex items-center justify-between w-[280px]"
          >
            <div className="flex items-center justify-between w-[280px] font-medium pb-3 ">
              <div
                className={`flex items-center space-x-2 justify-start gap-2  p-5 text-center ${
                  collapsed ? "w-[63px] h-[40px]" : "w-[250px] h-[50px] "
                } ${
                  isActiveStudent
                    ? "orange text-[#FAF1E6] rounded-xl"
                    : "base-color"
                }`}
              >
                <MdCheckCircleOutline className="w-[24px] h-[24px] montserrat" />
                {!collapsed && (
                  <h1 className="text-[18px] font-medium ">
                    Content Moderation
                  </h1>
                )}
              </div>
            </div>
          </NavLink>

          {/* Quote Packs */}
          <NavLink
            to="/quote-packs"
            className="flex items-center justify-between w-[280px]"
          >
            <div className="flex items-center justify-between w-[280px] font-medium pb-3 ">
              <div
                className={`flex items-center space-x-2 justify-start gap-4 p-5 text-center ${
                  collapsed ? "w-[63px] h-[40px]" : "w-[250px] h-[50px] "
                } ${
                  isActiveRsource
                    ? "orange text-[#FAF1E6] rounded-xl"
                    : "base-color"
                }`}
              >
                <BsBoxSeam className="w-[24px] h-[24px]" />
                {!collapsed && (
                  <h1 className="text-[20px] font-medium ">Quote Packs</h1>
                )}
              </div>
            </div>
          </NavLink>
          {/* User Feedback */}
          <NavLink
            to="/user-feedback"
            className="flex items-center justify-between w-[280px]"
          >
            <div className="flex items-center justify-between w-[280px] font-medium pb-3 ">
              <div
                className={`flex items-center space-x-2 justify-start gap-4 p-5 text-center ${
                  collapsed ? "w-[63px] h-[40px]" : "w-[250px] h-[50px] "
                } ${
                  isActiveRsource
                    ? "orange text-[#FAF1E6] rounded-xl"
                    : "base-color"
                }`}
              >
                <MdOutlineFeedback className="w-[24px] h-[24px]" />
                {!collapsed && (
                  <h1 className="text-[20px] font-medium ">User Feedback</h1>
                )}
              </div>
            </div>
          </NavLink>
          {/* Payments */}
          <NavLink
            to="/payments"
            className="flex items-center justify-between w-[280px]"
          >
            <div className="flex items-center justify-between w-[280px] font-medium pb-3">
              <div
                className={`flex items-center space-x-2 justify-start gap-4 p-5 text-center ${
                  collapsed ? "w-[63px] h-[40px]" : "w-[250px] h-[50px] "
                } ${
                  isActiveRsource
                    ? "orange text-[#FAF1E6] rounded-xl"
                    : "base-color"
                }`}
              >
                <MdOutlinePayment className="w-[24px] h-[24px]" />
                {!collapsed && (
                  <h1 className="text-[20px] font-medium ">Payments</h1>
                )}
              </div>
            </div>
          </NavLink>
          {/* Subscriptions */}
          <NavLink
            to="/subscriptions"
            className="flex items-center justify-between w-[280px]"
          >
            <div className="flex items-center justify-between w-[280px] font-medium pb-3">
              <div
                className={`flex items-center space-x-2 justify-start gap-4 p-5 text-center ${
                  collapsed ? "w-[63px] h-[40px]" : "w-[250px] h-[50px] "
                } ${
                  isActiveRsource
                    ? "orange text-[#FAF1E6] rounded-xl"
                    : "base-color"
                }`}
              >
                <MdOutlineSubscriptions className="w-[24px] h-[24px]" />
                {!collapsed && (
                  <h1 className="text-[20px] font-medium ">Subscriptions</h1>
                )}
              </div>
            </div>
          </NavLink>
          {/* Settings */}
          <NavLink
            to="/settings"
            className="flex items-center justify-between w-[280px]"
          >
            <div className="flex items-center justify-between w-[280px] font-medium pb-3">
              <div
                className={`flex items-center space-x-2 justify-start gap-4 p-5 text-center ${
                  collapsed ? "w-[63px] h-[40px]" : "w-[250px] h-[50px] "
                } ${
                  isActiveRsource
                    ? "orange text-[#FAF1E6] rounded-xl"
                    : "base-color"
                }`}
              >
                <IoSettingsOutline className="w-[24px] h-[24px]" />
                {!collapsed && (
                  <h1 className="text-[20px] font-medium ">Settings</h1>
                )}
              </div>
            </div>
          </NavLink>
        </nav>
      </div>

      {/* Logout */}
      <div
        onClick={handleLogout}
        className="flex items-center p-2 pb-10 pl-10 space-x-3 text-red-600 rounded-lg cursor-pointer"
      >
        <FaSignOutAlt />
        {!collapsed && <span>Log Out</span>}
      </div>
    </div>
  );
};

export default AdminSidebar;
