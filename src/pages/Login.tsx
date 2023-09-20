import { useState } from "react";
import { TLoginForm, defaultLoginForm } from "../interface";
import { useLogin } from "../hooks/useLogin";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const navigate = useNavigate();
  const [loginForm, setLoginForm] = useState<TLoginForm>(defaultLoginForm);
  const [loading, setLoading] = useState<boolean>(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: keyof TLoginForm
  ) => {
    const value = e.target.value;

    setLoginForm((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const clickLogin = async (loginForm: TLoginForm) => {
    setLoading(true);
    try {
      const data = await useLogin(loginForm);
      if (data?.status === "ok") {
        setLoading(false);
        localStorage.setItem("token", data.token);
        setTimeout(() => {
          navigate("/main"); 
        }, 500);
      }
    } catch (error) {
      throw error;
    }
  };

  // console.log("loginForm", loginForm);

  return (
    <div className="hero min-h-screen bg-slate-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            repellat quidem hic saepe ad distinctio totam praesentium doloribus,
            cupiditate, sequi rem error expedita sed ipsum, natus sapiente ea
            labore perferendis!
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                onChange={(e) => handleInputChange(e, "email")}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                onChange={(e) => handleInputChange(e, "password")}
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              {loading ? (
                <button className="btn">
                  <span className="loading loading-spinner"></span>
                  loading
                </button>
              ) : (
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    clickLogin(loginForm);
                  }}
                >
                  Login
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
