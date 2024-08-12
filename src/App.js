import React, { lazy, Suspense, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RiseLoader } from "react-spinners";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import NavScrollTop from "./components/NavScrollTop";
import Router from "./routes/Router";
import Loader from "./components/Loader/Loader";

// CSS File Here
import "antd/dist/reset.css";
import "./assets/css/fonts/fonts.css";
import "./assets/css/vendor/animate.css";
import "./assets/scss/style.scss";
import config from "./utils/config";
import 'bootstrap/dist/css/bootstrap.css';


// Maintenance Mode
const App = () => {
    const [cursorX, setCursorX] = useState(0);
    const [cursorY, setCursorY] = useState(0);

    const [LoadData, setLoadData] = useState(false);

    useEffect(() => {
        setLoadData(true);
    }, []);

    const isTouchDevice = () => {
        try {
            document.createEvent('TouchEvent');
            return true;
        } catch (e) {
            return false;
        }
    };

    const move = (e) => {
        const touchEvent = e.touches ? e.touches[0] : null;
        const x = !isTouchDevice() ? e.pageX : touchEvent?.pageX || 0;
        const y = !isTouchDevice() ? e.pageY : touchEvent?.pageY || 0;

        setCursorX(x);
        setCursorY(y);

        const cursorBorder = document.getElementById('cursor-border');
        if (cursorBorder) {
            cursorBorder.style.left = `${x}px`;
            cursorBorder.style.top = `${y}px`;
        }
    };


    useEffect(() => {
        document.addEventListener('mousemove', move);
        document.addEventListener('touchmove', move);

        return () => {
            document.removeEventListener('mousemove', move);
            document.removeEventListener('touchmove', move);
        };
    }, []);

    const rtl_support = config.rtl_spoort;

    // rtl
    useEffect(() => {
        if (rtl_support === "1") {
            document.documentElement.dir = "rtl";
        } else {
            document.documentElement.dir = "ltr";
        }
    }, [rtl_support]);

    return (
        <div>
            {LoadData ? (
                <>
                    <Header />
                    <NavScrollTop>
                        <div id="cursor" style={{ left: `${cursorX}px`, top: `${cursorY}px` }} className="cursorMain"></div>
                        <div id="cursor-border" className="cursor-border"></div>
                        <Suspense
                            fallback={
                                <Loader title={"Please Wait..."} />
                            }
                        >
                            <Router />
                        </Suspense>
                    </NavScrollTop>
                    <Footer />
                </>
            ) : (
                <Loader title={"Please Wait..."} />
            )}
        </div>
    );
};
export default App;
