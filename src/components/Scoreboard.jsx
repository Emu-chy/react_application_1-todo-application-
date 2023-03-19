import React from "react";
import Borad from "./Borad";

const Scoreboard = ({ addCounter, handleDelete }) => {
    return (
        <>
            <div className="all-matches container">
                {addCounter.map((counter) => {
                    return (
                        <Borad
                            key={counter.id}
                            boardNumber={counter.id}
                            handleDelete={handleDelete}
                        />
                    );
                })}
            </div>
        </>
    );
};

export default Scoreboard;
