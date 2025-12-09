/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import logo from "../../assets/logo.png";
import toast, { Toaster } from "react-hot-toast";
import { useSuperAdminLoginMutation } from "../../Redux/feature/authapi";
import { useDispatch } from "react-redux";
import { userLoggedIn } from "../../Redux/feature/authSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [isLoading, setLoading] = useState(false);
  const [superAdminLogin] = useSuperAdminLoginMutation();
  //  local state to trigger one-time animation on mount
  const [playFlip, setPlayFlip] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    // trigger animation on mount (next tick) so it always plays once
    const t = setTimeout(() => setPlayFlip(true), 20);
    // optional: remove play state after animation duration to keep DOM clean
    const clear = setTimeout(() => setPlayFlip(false), 1400); // match duration below
    return () => {
      clearTimeout(t);
      clearTimeout(clear);
    };
  }, []);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await superAdminLogin({
        email,
        password,
      }).unwrap();
      // console.log("Login response:", res);
      // API response expected:
      // res = { access: "token", user: {...} }

      dispatch(
        userLoggedIn({
          access_token: res?.access_token,
          user: res?.user,
        })
      );

      toast.success("Login Successful!");
      navigate("/");
    } catch (err) {
      toast.error(err?.data?.message || "Invalid email or password");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-white inter">
      <Toaster />

      {/* add animate-flip class when playFlip is true; otherwise keep same */}
      <div
        className={` w-full max-w-xl rounded-xl shadow-lg p-8 flex flex-col items-center border border-[#FFFFFF] bodybg ${
          playFlip ? "animate-flip-card" : ""
        }`}
      >
        <div className="flex flex-col items-center mb-8">
          <div className="flex items-center gap-2 mb-6">
            <img src={logo} alt="" />
            <h1 className="text-3xl text-[#FFFFFF] roboto">PPR Bangladesh</h1>
          </div>
          <h2 className="text-2xl font-semibold text-[#272727] roboto">
            Sign in
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="w-full space-y-6">
          <div className="">
            <label htmlFor="password" className="text-lg font-medium white">
              Enter Your Email
            </label>
            <input
              type="email"
              placeholder="Enter Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-2 py-3 bg-white border border-[#dfeee4] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#72C02C] focus:border-transparent transition  placeholder:text-[#9e9e9e] mt-2"
              required
            />
          </div>

          <div className="relative ">
            <label htmlFor="password" className="text-lg font-medium white">
              Enter Your Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-2 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#72C02C] focus:border-transparent transition  placeholder:text-[#9e9e9e] mt-2"
              required
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute white -translate-y-1/2 right-3 top-[69%] hover:text-gray-200"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          <button
            disabled={isLoading}
            className="w-full py-3 main-color text-white rounded-lg font-medium hover:bg-[#599722] transition"
          >
            {isLoading ? "Logging in..." : "Log In"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
