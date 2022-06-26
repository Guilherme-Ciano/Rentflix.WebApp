import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage";
import Signup from "./pages/signup";
import Signin from "./pages/signin";
import Catalogue from "./pages/catalogue";
import Loader from "./components/loader";
import { setIsLoading } from "./store/slices/mainState";
import { useDispatch } from "react-redux/es/exports";
import MoviePage from "./pages/moviePage";
import AdminPannel from "./pages/adminPannel";

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
            <Route path="/catalogue" element={<Catalogue />} />
            <Route path="/movies/new" element={<MoviePage />} />
            <Route path="/movies/edit" element={<MoviePage />} />
            <Route path="/admin" element={<AdminPannel />} />
          </Routes>
        </Router>
      </Loader>
    </>
  );
}
