import { Fragment, useState, useEffect } from "react";
import config from "../utils/config";
import { Link } from "react-router-dom";

const Header = () => {
    useEffect(() => {

    }, []);

    // logo
    const logoimage = config.header_logo;

    return (
        <Fragment>
            <div className="header-main flex-row justify-content-between">
                <div className="header-logo">
                    <Link to="/">
                        <img src={logoimage} alt="Online Calculator" style={{padding:5}}/>
                    </Link>
                </div>

                <div className="header-text">
                    <h1>
                        {/* {config.app_name} */}
                    </h1>
                </div>
            </div>
        </Fragment>
    );
};

export default Header;
