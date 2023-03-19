import React from "react";
import Borad from "./Borad";

const Scoreboard = ({ addCounter, handleDelete }) => {
    return (
        <>
            <div className="all-matches container">
                {addCounter.map((counter) => {
                    return (
                        <Borad
                            handleDelete={handleDelete}
                            key={counter.id}
                            boardNumber={counter.id}
                        />
                    );
                })}
            </div>
        </>
    );
};

export default Scoreboard;
