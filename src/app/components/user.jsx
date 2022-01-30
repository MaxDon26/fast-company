import React from "react";
import Qualities from "./qualities";
import Bookmark from "./bookmark";
import PropTypes from "prop-types";

const User = (props) => {
    return (
        <tr key={props._id}>
            <td>{props.name}</td>
            <td>
                {props.qualities.map((qual) => (
                    <Qualities
                        key={qual._id}
                        name={qual.name}
                        color={qual.color}
                        _id={qual._id}
                    />
                ))}
            </td>
            <td key={props.profession._id}>{props.profession.name}</td>
            <td>{props.completedMeetings}</td>
            <td>{props.rate}</td>
            <td>
                <button onClick={() => props.onToogleBookmark(props._id)}>
                    <Bookmark status={props.bookmark} />
                </button>
            </td>
            <td>
                <button
                    onClick={() => props.onDelete(props._id)}
                    className="btn btn-danger"
                >
                    Удалить
                </button>
            </td>
        </tr>
    );
};

User.propTypes = {
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    qualities: PropTypes.string.isRequired,
    profession: PropTypes.string.isRequired,
    completedMeetings: PropTypes.number.isRequired,
    rate: PropTypes.number.isRequired,
    bookmark: PropTypes.bool.isRequired,
    onToogleBookmark: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
};

export default User;
