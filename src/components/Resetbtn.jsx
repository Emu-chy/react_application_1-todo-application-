import React from "react";

const Resetbtn = () => {
    return (
        <>
            <button className="lws-reset">
                <svg 
                    fill="none" 
                    width="24" 
                    height="24" 
                    stroke="currentColor" 
                    stroke-width="2" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg" 
                    aria-hidden="true">
                <path 
                    stroke-linecap="round" 
                    stroke-linejoin="round" 
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15">

                </path>
                </svg>

                <span>Reset</span>
            </button>
        </>
    );
};

export default Resetbtn;
