import { NavLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { emailIcon, logo, passwordIcon } from "../assets";
import "../components/Login.css";
import loginSchema from "../schema/login";

function Login() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginSchema) });
  const navigate = useNavigate();

  const loginHandler = async (data) => {
    try {
      console.log("Login successful:", data);
      navigate("/home");
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen box-border m-0 p-0 border-none transition-all duration-200 ">
      <div className="grid items-center justify-center justify-items-center content-evenly h-screen">
        <img src={logo} alt="" />
        <div className="w-[476px] min-h-[482px] bg-white rounded-xl flex flex-col gap-2 p-10">
          <h1 className="text-gray-700 text-3xl font-bold leading-6 h-8">
            Login
          </h1>
          <p className="text-gray-500 text-base font-normal leading-8 pb-8">
            Add your details below to get back into the app
          </p>
          <form className="grid gap-4" onSubmit={handleSubmit(loginHandler)}>
            <div className="relative">
              <img
                src={emailIcon}
                alt="Image placeholder"
                className="absolute left-4 top-1/2 transform translate-y-0.5 w-6 h-6 p-1"
              />
              <label htmlFor="email" className="text-gray-500 text-xs">
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="e.g. alex@email.com"
                {...register("email")}
                className="shadow-hover w-full h-12 pl-14 pr-4 mt-1 outline-none rounded-lg border border-gray-300 bg-white text-gray-700"
              />
              <p className="absolute pl-4 text-sm text-red-500">
                {errors.email && errors.email.message}
              </p>
            </div>
            <div className="relative">
              <img
                src={passwordIcon}
                alt="Image placeholder"
                className="absolute left-4 top-1/2 transform translate-y-0.5 w-6 h-6 p-1"
              />
              <label htmlFor="password" className="text-gray-500 text-xs">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                {...register("password", {
                  maxLength: { value: 4, message: "DEBILI XAR" },
                })}
                className="shadow-hover w-full h-12 pl-14 pr-4 mt-1 outline-none rounded-lg border border-gray-300 bg-white text-gray-700"
              />
              <p className="absolute pl-5 pt-1 text-sm text-red-500">
                {errors.password && errors.password.message}
              </p>
            </div>
            <button
              type="submit"
              className="bg-[#633cff] h-12 px-4 rounded-lg text-white text-lg font-semibold cursor-pointer mt-6"
            >
              Login
            </button>
          </form>
          <div className="flex justify-center gap-3">
            <p>Dont have an account?</p>
            <NavLink
              to="/create-account"
              className="text-[#633cff] hover:underline"
            >
              Create accounts
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
