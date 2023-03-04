import React from "react";

const Header = () => {
    return (
        <>
            <header className="header">
                <div className="container">
                    <div className="header-wrapper">
                        <img src="./image/lws-logo 1.svg" alt="logo" class="logo" />
                        <h1 className="name">Scoreboard</h1>
                        <h5 className="total">Total</h5>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
