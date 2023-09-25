import { useState, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import More from "./pages/More";

function Loading() {
  return <h2>Loading...</h2>;
}

function App() {
  return (
    <main className="main">
      <Suspense fallback={<Loading />}>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route exact="true" path="/" element={<Home />} />
            <Route exact="true" path="/event/:name" element={<More />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Suspense>
    </main>
  );
}

export default App;
