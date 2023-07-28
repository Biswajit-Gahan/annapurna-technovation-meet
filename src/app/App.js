import React from "react";
// Supports weights 300-800
import '@fontsource-variable/open-sans';
import Navbar from "../components/navbar/Navbar";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "../templates/login/Login";
import Footer from "../components/footer/Footer";
import { AppContainer } from "./app.styles";
import Location from "../templates/location/Location";
import Play from "../templates/play/Play";
import Questions from "../templates/questions/Questions";

import { EncryptStorage } from 'encrypt-storage';
import { useSelector } from "react-redux";
// import FirebaseCheck from "../utils/FirebaseCheck";
import Results from "../templates/results/Results";
export const encryptStorage = new EncryptStorage('annapurna-events');

const App = () => {
  const { isLoggedIn } = useSelector((state) => state.admin);

  return (
    <AppContainer>
      <BrowserRouter>
        <Navbar />
        {/* <FirebaseCheck /> */}
        <Routes>
          <Route path="/login" element={isLoggedIn ? <Navigate to="/location" /> : <Login />} />
          <Route path="/location" element={isLoggedIn ? <Location /> : <Navigate to="/login" />} />
          <Route path="/play-quiz" element={isLoggedIn ? <Play /> : <Navigate to="/login" />} />
          <Route path="/set-questions" element={isLoggedIn ? <Questions /> : <Navigate to="/login" />} />
          <Route path="/results" element={isLoggedIn ? <Results /> : <Navigate to="/login" />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AppContainer>
  );
};

export default App;