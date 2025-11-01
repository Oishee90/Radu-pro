import { IoMdNotificationsOutline } from "react-icons/io";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex items-center justify-end py-6 px-6 bg-[#009038] dark:bg-[#374151]">

      {/* Time + Date + Notification */}
      <div className="flex items-center gap-6">

        {/* Time & Date */}
        <div className="flex flex-col leading-tight text-right">
          <span className="text-sm font-medium text-[#4B5563] dark:text-gray-300">
            05:00 PM
          </span>
          <span className="text-xs text-[#9CA3AF] dark:text-gray-400">
            27 Sep 2025
          </span>
        </div>

        {/* Notification Icon */}
        <NavLink to="/notification">
          <div className="relative cursor-pointer">
            <IoMdNotificationsOutline className="text-[#E6A521] w-5 h-5" />

            {/* Optional: Notification badge */}
            <span className="absolute top-[-3px] right-[-3px] w-2 h-2 bg-[#E6A521] rounded-full"></span>
          </div>
        </NavLink>
      </div>

    </div>
  );
};

export default Header;
