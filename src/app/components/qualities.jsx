import React from "react";

const Qualities = ({ color, name, _id }) => {
    const setClass = () => {
        const baseClass = "badge m-1 bg-";
        return baseClass + color;
    };
    return (
        <span key={_id} className={setClass()}>
            {name}
        </span>
    );
};

export default Qualities;
