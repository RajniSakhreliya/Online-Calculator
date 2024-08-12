import React, { useEffect, useState } from "react";
import { Unstable_Popup as BasePopup } from '@mui/base/Unstable_Popup';
import { styled } from '@mui/system';
import closeIcon from '../../assets/images/ic_close.png'
import { grey } from "@mui/material/colors";

const PopupView = ({ popupContent }) => {
    const [anchor, setAnchor] = React.useState(null);

    const handleClick = (event) => {
        setAnchor(anchor ? null : event.currentTarget);
    };

    const open = Boolean(anchor);
    const id = open ? 'simple-popper' : undefined;

    return (
        <div className="popupView">
            <BasePopup id={id} open={open} anchor={anchor}>
                <div className="d-flex">
                    <div className="popup-body d-flex">
                        {popupContent}
                        <div type="button">
                            <img className="closeImage"
                                onClick={() => {
                                    setAnchor(null);
                                    handlePopup(anchor);
                                }}
                                src={closeIcon}
                                width="80"
                                height="80"
                                alt="Close"
                                loading="lazy" />
                        </div>
                    </div>
                </div>
            </BasePopup>

            <div type="button" onClick={handleClick} style={{ color: "var(--grey200)" }} onMouseEnter={handleClick} onMouseLeave={() => {
                setAnchor(null);
            }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height="16" width="16" className="gst47InfoIcon">
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"></path>
                </svg>
            </div>
        </div >
    );
}

export default PopupView;