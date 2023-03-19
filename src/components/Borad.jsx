import React, { useState } from "react";

const Borad = ({ boardNumber, handleDelete }) => {
    const [addtion, setAdditon] = useState("");
    const [totalValue, setTotalValue] = useState(0);
    const [subtraction, setSubtraction] = useState("");

    const handleAddSubmit = (e) => {
        e.preventDefault();
        setTotalValue(parseInt(addtion) + totalValue);
        setAdditon("");
    };

    const handleSubSubmit = (e) => {
        e.preventDefault();
        setTotalValue(totalValue - parseInt(subtraction));
        setSubtraction("");
    };

    return (
        <>
            <div className="match">
                <div className="wrapper">
                    <button onClick={() => handleDelete(boardNumber)} className="lws-delete">
                        <img src="./image/delete.svg" alt="" />
                    </button>
                    <h3 className="lws-matchName">Match {boardNumber}</h3>
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
            </div>
        </>
    );
};

export default Borad;
