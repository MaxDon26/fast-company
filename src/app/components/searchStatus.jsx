import React from "react";
import PropTypes from "prop-types";

const SearchStatus = ({ length }) => {
    const people = length > 4 || length === 1 ? " человек" : " человека";
    const color = length === 0 ? "bg-danger" : "bg-primary";
    return (
        <h1 className={"badge fs-4 " + color}>
            {length === 0
                ? "Сегодня с тобой никто не тусанет"
                : length + people + " тусанет с тобой сегодня "}
        </h1>
    );
};

SearchStatus.propTypes = {
    length: PropTypes.number.isRequired
};

export default SearchStatus;
