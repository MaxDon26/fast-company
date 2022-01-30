import React from "react";
import PropTypes from "prop-types";

const Bookmark = ({ status, ...rest }) => {
    const classBookmark = status === true ? "bookmark-fill" : "bookmark";

    return <i className={"bi bi-" + classBookmark}></i>;
};

Bookmark.propTypes = {
    status: PropTypes.bool.isRequired
};

export default Bookmark;
