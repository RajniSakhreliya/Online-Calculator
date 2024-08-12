import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import { FaArrowLeft } from "react-icons/fa";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import errorImage from "../assets/images/404.png";

const NotFound = () => {
    const t = (string) => {
        return string;
    }
    return (
        <React.Fragment>
            <SEO title={"404"} />
            <Breadcrumb title={"404"} content={"Home"} contentTwo={"404"} />
            <div className="error_page morphisam">
                <div className="image_error">
                    <img src={errorImage} alt="404" />
                </div>
                <div className="title_error">
                    <h1>{"Oops, looks like the page is lost"}</h1>
                </div>
                <div className="title_para">
                    <p>{"This is not a fault, just an accident that was not intentional"}</p>
                </div>
                <div className="error_button">
                    <Link to={"/"} className="btn btn-primary">
                        <i>
                            <FaArrowLeft />
                        </i>{" "}
                        {"Back"}
                    </Link>
                </div>
            </div>
        </React.Fragment>
    );
};

export default NotFound;
