import PropTypes from "prop-types";
import React from "react";
import { Helmet } from "react-helmet-async";
import { useSelector } from "react-redux";
import config from "../utils/config";

const SEO = ({ title }) => {

    const appName = config.app_name;

    // favicon
    const faviconimage = config.faviconimage;

    // description
    const description = config.description;

    // meta keywords
    const metakeywords = config.metakeywords;

    return (
        <Helmet>
            <meta charSet="utf-8" />
            <link rel="icon" href={faviconimage} />
            <title>{appName + " | " + title}</title>
            <meta name="robots" content="INDEX,FOLLOW" />
            <meta name="description" content={description} />
            <meta name="keywords" content={metakeywords}></meta>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <meta property="og:title" content={appName + " | " + title} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content="website" />
        </Helmet>
    );
};

SEO.propTypes = {
    title: PropTypes.string,
};

export default SEO;
