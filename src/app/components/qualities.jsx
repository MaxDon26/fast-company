import React from "react";
import PropTypes from "prop-types";

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

Qualities.propTypes = {
    color: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired
};

export default Qualities;
