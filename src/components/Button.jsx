import React from "react";
import Resetbtn from "./Resetbtn";

const Button = () => {
    return (
        <>
            <div className="add_match">
                <button class="btn lws-addMatch">Add Another Match</button>
                <Resetbtn/>
            </div>
        </>
    );
};

export default Button;
