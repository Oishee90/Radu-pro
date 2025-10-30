const Header = () => {
  // console.log(role, "role in header");
  return (
    <div className="flex items-center border-b border-b-[#0000001A] justify-between py-4 px-2 lg:p-4 bg-white dark:bg-white text-[#020202] ">
      {/* Title */}

      <div></div>

      {/* Profile Section based on role */}
      <div className="flex items-center justify-around gap-4">
        <div className="curosr-pointer">
          <img
            src={
              "https://res.cloudinary.com/dwycwft99/image/upload/v1761800210/Container_g5fytg.png"
            }
            alt="Admin Profile"
            className="w-10 h-10 rounded-full cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
