import React, { useState } from "react";
import Resetbtn from "./Resetbtn";
import Scoreboard from "./ScoreBoard";

const Button = ({ handleClick }) => {
    return (
        <>
            <div className="add_match">
                <button onClick={handleClick} className="btn lws-addMatch">
                    Add Another Match
                </button>
                <Resetbtn />
            </div>
        </>
    );
};

export default Button;
