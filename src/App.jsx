// import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NotFound from './pages/NotFound'
import Home from './pages/Home'
import { StarBackground } from '@/components/StarBackground'
import { CloudBackground } from '@/components/CloudBackground'
import { ThemeToggle } from '@/components/ThemeToggle'
import { useState, useEffect } from 'react'
import { Toaster } from "sonner";
import { HeroSection } from './components/HeroSection'
import { AboutSection } from './components/AboutSection'

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };


  return (
    <>
    <Toaster position="top-center" theme={isDarkMode ? "dark" : "light"} richColors />
    <BrowserRouter>
    {isDarkMode ? <StarBackground /> : <CloudBackground />}
    <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
    <Routes>
      <Route index element={<Home/>}/>
      <Route path="*" element={<NotFound/>} />
      
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App