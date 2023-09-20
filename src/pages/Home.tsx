import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://cdn.pixabay.com/photo/2016/11/29/06/18/apple-1867762_1280.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
            ducimus velit est numquam! Nulla labore voluptatibus voluptas
            suscipit voluptate, est quibusdam aliquam, fugiat cum, dolorem neque
            hic ratione doloribus culpa!
          </p>
          <Link to="/login">
            <button className="btn btn-primary">Go to Login !</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
