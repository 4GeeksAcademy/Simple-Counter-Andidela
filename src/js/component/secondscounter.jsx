import React from "react";

const SecondsCounter = ({ seconds }) => {
    return (
        <div className="seconds-counter">
            <i className="fas fa-clock"></i>
            <span>{seconds}</span> seconds
        </div>
    );
};
export default SecondsCounter;