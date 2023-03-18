import React from "react";
import Borad from "./Borad";

const Scoreboard = ({ addCounter }) => {
    return (
        <>
            <div className="all-matches container">
                {addCounter.map((counter, index) => {
                    return <Borad key={counter.id} />;
                })}
                {/* <div className="match">
                    <div className="wrapper">
                        <button className="lws-delete">
                            <img src="./image/delete.svg" alt="" />
                        </button>
                        <h3 className="lws-matchName">Match 1</h3>
                    </div>

                    <div className="inc-dec">
                        <form onSubmit={(e) => handleAddSubmit(e)} className="incrementForm">
                            <h4>Increment</h4>
                            <input
                                type="number"
                                name="increment"
                                value={addtion}
                                className="lws-increment"
                                onChange={(e) => setAdditon(e.target.value)}
                            />
                            <input type="submit" className="d-none" />
                        </form>

                        <form onSubmit={(e) => handleSubSubmit(e)} className="decrementForm">
                            <h4>Decrement</h4>
                            <input
                                type="number"
                                name="decrement"
                                value={subtraction}
                                onChange={(e) => setSubtraction(e.target.value)}
                                className="lws-decrement"
                            />
                            <input type="button" className="d-none" />
                        </form>
                    </div>

                    <div className="numbers">
                        <h2 className="lws-singleResult">{totalValue}</h2>
                    </div>
                </div> */}
                <Borad />
            </div>
        </>
    );
};

export default Scoreboard;
