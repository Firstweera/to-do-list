import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { HomePage, LoginPage, MainPage } from "./pages";
import { NavBar } from "./components";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
