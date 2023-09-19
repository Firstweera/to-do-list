export const NavBar = () => {
  return (
    <>
      <div className="navbar bg-base-100 fixed top-0 left-0 z-50">
        <div className="navbar-start"></div>
        <div className="navbar-center">
          <a className="btn btn-ghost normal-case text-xl">To-Do list</a>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a href="/">Homepage</a>
              </li>
              <li>
                <a href="/login">Login</a>
              </li>
              <li>
                <a>Register</a>
              </li>
              <li>
                <a href="/main">Main</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
