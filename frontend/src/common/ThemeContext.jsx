import React, { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    // Check local storage or system preference
    const [theme, setTheme] = useState(() => {
        // Force dark mode as the ultimate default, ignoring old cache
        const themeVersion = localStorage.getItem("theme-v2");
        if (!themeVersion) {
            localStorage.setItem("theme-v2", "dark");
            localStorage.setItem("theme", "dark");
            return "dark";
        }
        return localStorage.getItem("theme") || "dark";
    });

    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove("light", "dark");
        root.classList.add(theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
