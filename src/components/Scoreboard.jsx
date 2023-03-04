import React from "react";

const ScoreBoard = () => {
    return (
        <>
            <div className="all-matches container">
                {/* <!-- Each form tag is Each row, This will render multiple times on Clicking 'Add Another Match' --> */}
                <div className="match">
                    <div className="wrapper">
                        <button className="lws-delete">
                            <img src="./image/delete.svg" alt="" />
                        </button>
                        <h3 className="lws-matchName">Match 1</h3>
                    </div>
                    
                    <div className="inc-dec">
                        <form className="incrementForm">
                            <h4>Increment</h4>
                            <input type="number" name="increment" className="lws-increment" />
                        </form>

                        <form className="decrementForm">
                            <h4>Decrement</h4>
                            <input type="number" name="decrement" className="lws-decrement" />
                        </form>
                    </div>

                    <div className="numbers">
                        <h2 className="lws-singleResult">120</h2>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ScoreBoard;
