import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage";
import Signup from "./pages/signup";
import Signin from "./pages/signin";
import ForgotPassword from "./pages/forgotPassword";
import Catalogue from "./pages/catalogue";
import Loader from "./components/loader";
import { setIsLoading } from "./store/slices/mainState";
import { useDispatch } from "react-redux/es/exports";

export default function ApplicationRouter() {
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(setIsLoading(false));
    }, 1500);
  }, []);

  return (
    <>
      <Loader>
        <Router>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/sign-up" element={<Signup />} />
            <Route path="/sign-in" element={<Signin />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/catalogue" element={<Catalogue />} />
          </Routes>
        </Router>
      </Loader>
    </>
  );
}
