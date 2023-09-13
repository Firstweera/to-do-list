import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { ContentContainer } from "./components";
import { HomePage, LoginPage, MainPage } from "./pages";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <ContentContainer>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/main" element={<MainPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </ContentContainer>
      </BrowserRouter>
    </div>
  );
};

export default App;
