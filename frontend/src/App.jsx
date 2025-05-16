import Aj from "./pages/Aj.jsx";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header.jsx";
import Card from "./components/Card.jsx";
import Footer from "./components/Footer.jsx";
import Button from "./components/Button.jsx";
import Navbar from "./components/Navbar.jsx";
import "./App.css";
import React, { useState, useEffect } from "react";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import NotFound from "./pages/NotFound.jsx"; 

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();

  // สลับโหมด dark/light
  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const isHomePage = location.pathname === "/";

  const path = location.pathname;
  const isNotFoundPage = !["/", "/about", "/aj", "/contact"].includes(path);

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen text-black dark:text-white transition-all duration-300">
      {/* Navbar แสดงทุกหน้า */}
      {!isNotFoundPage && <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />}

      <div className="p-8">
        <Routes>
          {/* หน้า Home เท่านั้นที่แสดง Card, Button, Footer */}
          <Route
            path="/"
            element={
              <>
                <h1 className="mt-6 text-3xl font-bold">Welcome to StBookinary</h1>
                <p className="mt-2 text-lg">StBookinary shop</p>

                <div className="mt-6 space-y-4 outline-amber-300 border-1">
                  <Card />
                  <Button />
                </div>
              </>
            }
          />

          {/* หน้า About หรืออื่นๆ */}
          <Route path="/about" />

          {/* เพิ่ม Route อื่นๆ ตามต้องการ */}
          <Route path="/aj" element={<Aj />} />
          <Route path="/contact" element={<Contact />} />

          {/* หน้าหลุด path ทั้งหมด */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

      {/* แสดง Footer เฉพาะเมื่อไม่ใช่หน้า Not Found */}
      {!isNotFoundPage && (
        <div className="mt-8 space-y-4 outline-amber-300 border-1 bg-gray-400">
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
