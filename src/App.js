import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import {
  createHashRouter,
  RouterProvider,
  Outlet,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "./Pages/Home/Home";
import Newsletter from "./Pages/Newsletter/Newsletter";
import Projects from "./Pages/Projects/Projects";
import Departments from "./Pages/Departments/Departments";
import Navbar from "./Navbar";
import Footer from "./Footer";

function App() {
  const AppLayout = () => (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );

  const router = createHashRouter(
    createRoutesFromElements(
      <Route element={<AppLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/newsletter" element={<Newsletter />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/departments" element={<Departments />} />
      </Route>
    )
  );

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
