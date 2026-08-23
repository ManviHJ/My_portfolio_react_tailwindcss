import { Moon, Sun } from "lucide-react";
import {useEffect, useState} from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = ({isDarkMode, toggleTheme}) => {
    // const [isDarkMode, setIsDarkMode] = useState(false);

    // useEffect(()=>{
    //     const storedTheme= localStorage.getItem("theme")
    //     if (storedTheme === "dark") {
    //         setIsDarkMode(true);
    //         document.documentElement.classList.add("dark");
    //     } else {
    //         setIsDarkMode(false);

    //     }
    // }, [])

    // const toggleTheme = () => {
    //     if(isDarkMode) {
    //         document.documentElement.classList.remove("dark");
    //         localStorage.setItem("theme", "light");
    //         setIsDarkMode(false);
    //     } else {
    //         document.documentElement.classList.add("dark");
    //         localStorage.setItem("theme", "dark");
    //         setIsDarkMode(true);
    //     }
    //    };
    

    return (
        <button onClick={toggleTheme} className={cn("fixed top-5 right-16 sm:right-5 z-70 p-2 rounded-full transition-colors duration-300",
            "focus:outline-hidden"
        )}> 
            {" "}
            {isDarkMode ? (
                <Sun className="h-6 w-6 text-yellow-300"/> 
            ) : (
                <Moon className="h-6 w-6 text-blue-600"/>
            )}
        </button>
    );
};