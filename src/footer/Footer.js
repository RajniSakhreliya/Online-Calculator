import React, { Fragment, useState } from "react";
import { IoLogoFacebook, IoLogoInstagram, IoLogoLinkedin, IoLogoYoutube } from "react-icons/io5";
import { Link, Navigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import config from "../utils/config";
import playStoreIcon from "../assets/images/playstore.svg"
import appStoreIcon from "../assets/images/appstore.svg"

const Footer = () => {

    const appLink = config.app_link;

    const appiosLink = config.app_link_ios;

    // facebook link
    const facebook_link_footer = config.facebook_link_footer;

    // instagram link
    const instagram_link_footer = config.instagram_link_footer;

    // linkedin link
    const linkedin_link_footer = config.linkedin_link_footer;

    // youtube link
    const youtube_link_footer = config.youtube_link_footer;

    // footer logo
    const footer_logo = config.footer_logo;

    // company text
    const company_text = config.company_text;

    // address
    const address_text = config.address_text;

    // email
    const email_footer = config.email_footer;

    // phone number
    const phone_number_footer = config.phone_number_footer;

    // web link
    const web_link_footer = config.web_link_footer;

    // company name
    const company_name_footer = config.company_name_footer;


    //social media data
    const socialdata = [
        {
            id: 1,
            sodata: <IoLogoFacebook />,
            link: facebook_link_footer ? facebook_link_footer : null,
        },
        {
            id: 2,
            sodata: <IoLogoInstagram />,
            link: instagram_link_footer ? instagram_link_footer : null,
        },
        {
            id: 3,
            sodata: <IoLogoLinkedin />,
            link: linkedin_link_footer ? linkedin_link_footer : null,
        },
        {
            id: 4,
            sodata: <IoLogoYoutube />,
            link: youtube_link_footer ? youtube_link_footer : null,
        },
    ];

    const t = (string) => {
        return string;

    }
    return (
        <Fragment>
            <div className="footer_wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-3 col-12 footer_left">
                            <div className="footer_left_text">
                                <h4>{company_text}</h4>
                            </div>
                            <div className="two_images d-flex align-item-center flex-wrap">
                                {appLink ?
                                    <div className="playstore_img me-1">
                                        <Link onClick={() => window.open(appLink, '_blank')}>
                                            <img height={50} src={playStoreIcon} alt="playstore" />
                                        </Link>
                                    </div>
                                    : null}

                                {appiosLink ?
                                    <div className="playstore_img iosimg">
                                        <Link onClick={() => window.open(appiosLink, '_blank')}>
                                            <img height={50} src={appStoreIcon} alt="ios" />
                                        </Link>
                                    </div>
                                    : null}
                            </div>
                        </div>
                        
                        <div className="col-md-6 col-lg-3 col-12 footer_right">
                            <div className="footer_title">
                                <h4 className="footer_heading">{"Find Us Here"}</h4>
                            </div>
                            <ul className="footer_policy">
                                {address_text ?
                                    <li className="footer_list_address">{address_text}</li>
                                    : null}
                                {email_footer ?
                                    <li className="footer_list_email">
                                        <a href={`mailto:${email_footer}`}>{email_footer}</a>
                                    </li>
                                    : null}
                                {phone_number_footer ?
                                    <li className="footer_list_number">
                                        <a href={`tel:${phone_number_footer}`}>{phone_number_footer}</a>
                                    </li>
                                    : null}
                            </ul>
                            <ul className="footer_social">
                                {socialdata.map((data) => (
                                    <li className="footer_social_list" key={data.id}>
                                        <a href={data.link} target="_blank">
                                            <i>{data.sodata}</i>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="col-md-6 col-lg-3 col-12 footer_left_second">
                            <div className="footer_title">
                                <h4 className="footer_heading">{"Policy"}</h4>
                            </div>
                            <ul className="footer_policy">
                                <li className="footer_list">
                                    <Link to="/privacy-policy">{"Privacy Policy"}</Link>
                                </li>
                                <li className="footer_list">
                                    <Link to="/terms-conditions">{"Terms and Conditions"}</Link>
                                </li>
                            </ul>
                        </div>

                        <div className="col-md-6 col-lg-3 col-12 footer_right">
                            <div className="footer_title">
                                <h4 className="footer_heading">{"Company"}</h4>
                            </div>
                            <ul className="footer_policy">
                                <li className="footer_list">
                                    <Link to="/about-us">{"About Us"}</Link>
                                </li>
                                <li className="footer_list">
                                    <Link to="/contact-us">{"Contact Us"}</Link>
                                </li>
                            </ul>
                        </div>

                    </div>
                    <hr />

                    <div className="footer_copyright text-center">
                        <p>
                            {"Copyright"} © {new Date().getFullYear()}
                            {" "}{"Made By"}{" "}
                            <a href={"/"}>
                                {company_name_footer}
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Footer;
