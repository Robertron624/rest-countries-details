import "./index.scss";
import { useState, useEffect } from "react";
const Header = () => {
    const [theme, settheme] = useState<string>("dark");

    const toggleTheme = () => {
        if (theme === "light") {
            settheme("dark");
        } else {
            settheme("light");
        }
    };

    // Change the theme based on the theme state
    useEffect(() => {
        if (theme === "light") {
            document.body.setAttribute("data-theme", "light");
        } else {
            document.body.setAttribute("data-theme", "dark");
        }
    }, [theme]);

    return (
        <header className="flex justify-between">
            <div className="header-inner flex justify-between mx-auto">
                <a href="/">Where in the world?</a>
                <button onClick={toggleTheme} className="flex align-center">
                    {theme === "light" ? (
                        <svg
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 32 32"
                        >
                            <title>moon-stroke</title>
                            <path d="M5.895 9.148c0.848 8.959 8 16.109 16.957 16.953-1.91 1.211-4.152 1.898-6.5 1.898-6.813 0.001-12.352-5.538-12.352-12.353 0-2.347 0.688-4.587 1.895-6.498zM11.844 0c-6.824 1.969-11.844 8.189-11.844 15.646 0 9.034 7.32 16.354 16.352 16.354 7.457 0 13.68-5.023 15.648-11.844-2.18 1.258-4.672 2.031-7.367 2.031-8.188 0-14.82-6.639-14.82-14.822-0.001-2.695 0.773-5.187 2.031-7.365v0z"></path>
                        </svg>
                    ) : (
                        <svg
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 32 32"
                        >
                            <title>moon-fill</title>
                            <path
                                fill="#fff"
                                d="M24.633 22.184c-8.188 0-14.82-6.637-14.82-14.82 0-2.695 0.773-5.188 2.031-7.363-6.824 1.968-11.844 8.187-11.844 15.644 0 9.031 7.32 16.355 16.352 16.355 7.457 0 13.68-5.023 15.648-11.844-2.18 1.254-4.672 2.028-7.367 2.028z"
                            ></path>
                        </svg>
                    )}
                    Dark Mode
                </button>
            </div>
        </header>
    );
};

export default Header;
