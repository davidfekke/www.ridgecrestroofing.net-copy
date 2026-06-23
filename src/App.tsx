import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BackgroundDecor } from "@/components/BackgroundDecor";
import { Header } from "@/sections/Header";
import { Main } from "@/sections/Main";
import { Footer } from "@/sections/Footer";
import { AdminPage } from "./pages/AdminPage";

const Home = () => (
  <div className="min-h-screen overflow-x-hidden font-space_grotesk text-gray-800 bg-[radial-gradient(circle_at_15%_10%,rgb(242,251,255)_0%,rgb(242,251,255)_24%,rgba(0,0,0,0)_45%),radial-gradient(circle_at_90%_25%,rgb(255,242,211)_0%,rgb(255,242,211)_18%,rgba(0,0,0,0)_42%),linear-gradient(rgb(248,252,255)_0%,rgb(255,250,239)_54%,rgb(248,245,238)_100%)]">
    <BackgroundDecor variantClassName="bg-sky-300 left-[-180px] top-[-220px]" />
    <BackgroundDecor variantClassName="bg-red-300 bottom-[-260px] right-[-210px]" />
    <Header />
    <Main />
    <Footer />
  </div>
);

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </BrowserRouter>
  );
};
