import { useState } from "react";
import { TRegisterForm, defaultRegisterForm } from "../interface";
import { useRegister } from "../hooks";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const navigate = useNavigate();
  const [registerForm, setRegisterForm] =
    useState<TRegisterForm>(defaultRegisterForm);
  const [alert, setAlert] = useState<JSX.Element>(<></>);

  // Function to check if passwords match
  const passwordsMatch = () => {
    return registerForm.password === registerForm.confirmPassword;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: keyof TRegisterForm
  ) => {
    const value = e.target.value;

    setRegisterForm((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const clickRegister = async (registerForm: TRegisterForm) => {
    try {
      const data = await useRegister(registerForm);
      console.log("data: ", data);
      if (data?.status === "ok") {
        setAlert(
          <div className="alert alert-success">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Your register has been success!</span>
          </div>
        );
        // Navigate to the /login page after a delay
        setTimeout(() => {
          navigate("/login"); // Use navigate instead of history.push
        }, 2000); // 3000 milliseconds (3 seconds) delay
      }
    } catch (error) {
      console.error("error: ", error);
      setAlert(
        <div className="alert alert-error">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>Error! Please notify admin. or related persons!!</span>
        </div>
      );

      setTimeout(() => {
        setAlert(<></>);
      }, 2000);
    }
  };

  // console.log("registerForm", registerForm);
  // console.log("env web api: ", import.meta.env.VITE_BASE_URL_WEB_API);

  return (
    <>
      <div className="mt-20 z-50 absolute right-5">{alert}</div>

      <div className="flex justify-center items-center w-full bg-slate-200 min-h-screen px-5 py-5">
        <div className="xl:max-w-7xl bg-white drop-shadow-xl border border-black/20 w-full rounded-lg flex justify-between items-stretch px-5 xl:px-5 py-5">
          <div className="sm:w-[60%] lg:w-[50%] bg-cover bg-center items-center justify-center hidden md:flex">
            <img
              src="https://cdn.pixabay.com/photo/2020/05/18/16/17/social-media-5187243_1280.png"
              alt="login"
              className="h-[500px] rounded-lg"
            />
          </div>
          <div className="mx-auto w-full lg:w-1/2 md:p-10 py-5 md:py-0">
            <h1 className="text-center text-2xl sm:text-3xl font-semibold text-[#4A07DA]">
              Create Account
            </h1>
            <div className="w-full mt-5 sm:mt-8">
              <div className="mx-auto w-full sm:max-w-md md:max-w-lg flex flex-col gap-5">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="text"
                    placeholder="Enter Your First Name"
                    className="input input-bordered input-primary w-full max-w-xs text-black placeholder:text-black/70"
                    onChange={(e) => handleInputChange(e, "fname")}
                  />
                  <input
                    type="text"
                    placeholder="Enter Your Last Name"
                    className="input input-bordered input-primary w-full max-w-xs text-black placeholder:text-black/70"
                    onChange={(e) => handleInputChange(e, "lname")}
                  />
                </div>
                <input
                  type="text"
                  placeholder="Enter Your Email"
                  className="input input-bordered input-primary w-full text-black placeholder:text-black/70"
                  onChange={(e) => handleInputChange(e, "email")}
                />
                <input
                  type="Password"
                  placeholder="Enter Your Password"
                  className="input input-bordered input-primary w-full text-black placeholder:text-black/70"
                  onChange={(e) => handleInputChange(e, "password")}
                />
                <input
                  type="Password"
                  placeholder="Confirm Your Password"
                  className="input input-bordered input-primary w-full text-black placeholder:text-black/70"
                  onChange={(e) => handleInputChange(e, "confirmPassword")}
                />
                <div className="-mt-3">
                  <p className="text-red-500 text-xs">
                    {passwordsMatch() ? null : <>Password is not matching</>}
                  </p>
                </div>
                <div className="flex flex-col md:flex-row gap-2 md:gap-4 justify-center items-center mt-5">
                  <button
                    className={"btn btn-active btn-primary btn-block"}
                    disabled={passwordsMatch() ? false : true}
                    onClick={() => {
                      if (passwordsMatch()) {
                        clickRegister(registerForm);
                      }
                    }}
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// agreement
{
  /* <div className="flex items-center gap-1.5  justify-start pl-2">
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <input
                      type="checkbox"
                      className="checkbox-xs checkbox-primary"
                    />
                  </label>
                </div>
                <h3 className="flex items-center whitespace-nowrap text-xs text-black">
                  I agree to the
                  <span className="text-[#4A07DA]">&nbsp;Terms</span>
                  &nbsp;and
                  <span className="text-[#4A07DA]">&nbsp;Privacy Policy</span>.
                </h3>
              </div> */
}
