import React from "react";
import Resetbtn from "./Resetbtn";

const Button = ({ handleClick, handleReset }) => {
    return (
        <>
            <div className="add_match">
                <button onClick={handleClick} className="btn lws-addMatch">
                    Add Another Match
                </button>
                <Resetbtn handleReset={handleReset} />
            </div>
        </>
    );
};

export default Button;
