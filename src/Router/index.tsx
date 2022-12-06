import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BoardPage from "../pages/BoardPage";
import HomePage from "../pages/HomePage";
import IntroducePage from "../pages/IntroducePage";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/introduce" element={<IntroducePage />} />
          <Route path="/board" element={<BoardPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
