import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import logo from "../../assets/logo.png";
import bg from "../../assets/kev-login.png";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (email === "admin@gmail.com" && password === "admin@gmail.com") {
      toast.success("Login Successful!");

      setTimeout(() => {
        navigate("/");
      }, 1500); // navigate after 1.5sec (you can change timing)
    } else {
      toast.error("❌ Invalid email or password.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-[#f9f6f2]">
      <Toaster></Toaster>
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <img src={logo} alt="Logo" className="" />
        </div>

        {/* Welcome Text */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-normal text-[#7D7D7D] outfit">
            Welcome back
          </h1>
          <p className="mt-1 text-base  text-[#7D7D7D] outfit">
            We're so excited to see you again!
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block mb-1 text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder=""
              className="w-full px-4 py-3 transition border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block mb-1 text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 pr-12 transition border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                required
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute text-gray-500 transform -translate-y-1/2 right-3 top-1/2 hover:text-gray-700"
              >
                {showPassword ? (
                  <FaEyeSlash className="w-5 h-5" />
                ) : (
                  <FaEye className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          {/* Forgot Password */}
          {/* <div className="text-right">
            <NavLink
              to="/forgot"
              className="text-sm font-medium text-[#DF951F] hover:text-[#DF951F]"
            >
              Forgot your password?
            </NavLink>
          </div> */}

          {/* Error Message */}
          {errorMessage && (
            <div className="text-sm text-center text-red-600 animate-pulse">
              {errorMessage}
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 font-medium text-white transition duration-200 bg-[#DF951F] rounded-lg hover:bg-orange-600"
          >
            Log In
          </button>
        </form>

        {/* Sign Up Link */}
        {/* <p className="mt-6 text-sm text-center text-gray-600">
          Don't have an account?{" "}
          <NavLink
            to="/signup"
            className="font-medium text-[#DF951F] hover:text-[#DF951F]"
          >
            Sign up
          </NavLink>
        </p> */}
      </div>

      {/* Background Image (Hidden on Mobile, Visible on Large Screens) */}
      <div
        className="fixed inset-0 hidden -z-10 lg:block"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
    </div>
  );
};

export default Login;
