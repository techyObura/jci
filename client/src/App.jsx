import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import National_Board from "./pages/about_us/National_Board";
import Local_Organizations from "./pages/about_us/Local_Organizations";
import Partners from "./pages/about_us/Partners";
import History from "./pages/about_us/History";
import Flagship_Programs from "./pages/our_programs/Flagship_Programs";
import Elite_Programs from "./pages/our_programs/Elite_Programs";
import Priority_Programs from "./pages/our_programs/Priority_Programs";
import Magazine from "./pages/media/Magazine";
import Broadcast from "./pages/media/Broadcast";
import Social_Media from "./pages/media/Social_Media";
import Blogs from "./pages/media/Blogs";
import Register from "./pages/get_involved/Register";
import Donate from "./pages/get_involved/Donate";
import Contact from "./pages/get_involved/Contact";
import NoPage from "./pages/NoPage";
import Header from "./components/Header";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/national_board" element={<National_Board />} />
        <Route path="/local_organizations" element={<Local_Organizations />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/history" element={<History />} />
        <Route path="/flagship_programs" element={<Flagship_Programs />} />
        <Route path="/elite_programs" element={<Elite_Programs />} />
        <Route path="/priority_programs" element={<Priority_Programs />} />
        <Route path="/magazine" element={<Magazine />} />
        <Route path="/broadcast" element={<Broadcast />} />
        <Route path="/social_media" element={<Social_Media />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/register" element={<Register />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
