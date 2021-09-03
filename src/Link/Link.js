import React, { useState } from "react";
import './Link.css';

const STATUS = {
    HOVERED: "hovered",
    NORMAL: "normal",
};

export const Link = ({ link, children }) => {
    const [status, setStatus] = useState(STATUS.NORMAL);

    const onMouseEnter = () => {
        setStatus(STATUS.HOVERED);
    };

    const onMouseLeave = () => {
        setStatus(STATUS.NORMAL);
    };

    return (
        <a
            className={status}
            href={link}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            {children}
        </a>
    );
};
