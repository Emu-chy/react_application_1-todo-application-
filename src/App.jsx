import { useState } from "react";

import Button from "./components/Button";
import Header from "./components/Header";
import Scoreboard from "./components/Scoreboard";
import "./App.css";

function App() {
    const [addCounter, setAddCounter] = useState([{ id: 1 }]);

    const handleClick = () => {
        const counter = addCounter.length + 1;
        setAddCounter([...addCounter, { id: counter }]);
    };

    const handleDelete = (id) => {
        const deletedItem = addCounter.filter((item, ind) => {
            return item.id !== id;
        });
        setAddCounter(deletedItem);
    };

    const handleReset = () => {
        setAddCounter([]);
    };
    return (
        <>
            <section className="section">
                <Header />
                <Scoreboard addCounter={addCounter} handleDelete={handleDelete} />
                <Button handleClick={handleClick} handleReset={handleReset} />
            </section>
        </>
    );
}

export default App;
