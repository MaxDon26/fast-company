import React from "react";

const SearchStatus = ({ length }) => {
    let people = length > 4 || length === 1 ? " человек" : " человека";
    let color = length === 0 ? "bg-danger" : "bg-primary";
    return (
        <h1 className={"badge fs-4 " + color}>
            {length === 0
                ? "Сегодня с тобой никто не тусанет"
                : length + people + " тусанет с тобой сегодня "}
        </h1>
    );
};

export default SearchStatus;
