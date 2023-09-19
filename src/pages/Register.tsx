export const Register = () => {
  return (
    <>
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
                  />
                  <input
                    type="text"
                    placeholder="Enter Your Last Name"
                    className="input input-bordered input-primary w-full max-w-xs text-black placeholder:text-black/70"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Enter Your Email"
                  className="input input-bordered input-primary w-full text-black placeholder:text-black/70"
                />
                <input
                  type="Password"
                  placeholder="Enter Your Password"
                  className="input input-bordered input-primary w-full text-black placeholder:text-black/70"
                />
                <input
                  type="Password"
                  placeholder="Confirm Your Password"
                  className="input input-bordered input-primary w-full text-black placeholder:text-black/70"
                />
                {/* <div className="flex items-center gap-1.5  justify-start pl-2">
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
              </div> */}
                <div className="flex flex-col md:flex-row gap-2 md:gap-4 justify-center items-center mt-5">
                  <button className="btn btn-active btn-primary btn-block max-w-[200px]">
                    Sign Up
                  </button>
                  {/* <button className="btn btn-outline btn-primary btn-block max-w-[200px]">
                  Sign In
                </button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
