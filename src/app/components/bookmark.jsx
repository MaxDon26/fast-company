import React from "react";

const Bookmark = ({ status, ...rest }) => {
    let classBookmark = status === true ? "bookmark-fill" : "bookmark";

    return <i className={"bi bi-" + classBookmark}></i>;
};

export default Bookmark;
