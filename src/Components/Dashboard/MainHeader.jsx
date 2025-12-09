import { NavLink } from "react-router-dom";
import { IoMdNotificationsOutline } from "react-icons/io";
import { useGetProfileQuery } from "../../Redux/feature/authapi";
const Header = () => {
  // console.log(role, "role in header");
  const { data: profileData, refetch } = useGetProfileQuery();
  return (
    <div className="flex items-center border-b border-b-[#0000001A] justify-between py-4 px-2 lg:p-4 bg-white dark:bg-white text-[#020202] outfit ">
      {/* Title */}

      <div></div>

      {/* Profile Section based on role */}
      <div className="flex items-center gap-6 cursor-pointer">
        {/* Time + Date */}
        <div className="flex flex-col leading-tight text-right">
          <span className="text-sm font-medium text-[#4B5563] dark:text-gray-300">
            {profileData?.first_name}
          </span>
          <span className="text-xs text-[#9CA3AF] dark:text-gray-400">
        {profileData?.email}
          </span>
        </div>

        {/* Notification Icon */}
        {/* <NavLink to="/">
          <div className="relative cursor-pointer">
            <IoMdNotificationsOutline className="w-5 h-5 text-[#E6A521]" />


            <span className="absolute top-[-3px] right-[-3px] w-2 h-2 rounded-full bg-[#E6A521]"></span>
          </div>
        </NavLink> */}
      </div>
    </div>
  );
};

export default Header;
