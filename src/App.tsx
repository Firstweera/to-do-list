import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { HomePage, LoginPage, MainPage, Register } from "./pages";
import { NavBar } from "./components";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        {/* <ContentContainer> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/main" element={<MainPage />} />
        </Routes>
        {/* </ContentContainer> */}
      </BrowserRouter>
    </div>
  );
};

export default App;
