import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Breadcrumb = ({ title, content, contentTwo }) => {
    return (
        <React.Fragment>
            <div className="breadcrumb__wrapper">
                <div className="row">
                    <div className="Breadcrumb">
                        <div className="breadcrumb__inner">
                            <ul className="breadcrumb justify-content-center">
                                <div className="parent__link">
                                    <Link to={"/"}>{content}</Link>
                                </div>
                                <div className="BreadSpace">{">"}</div>
                                <div className="current">{contentTwo}</div>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </React.Fragment>
    );
};

Breadcrumb.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
    contentTwo: PropTypes.string,
};

export default Breadcrumb;
