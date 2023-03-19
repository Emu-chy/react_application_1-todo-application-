import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Header from "./components/Header";
import Scoreboard from "./components/Scoreboard";

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
    return (
        <>
            <section className="section">
                <Header />
                <Scoreboard handleDelete={handleDelete} addCounter={addCounter} />
                <Button handleClick={handleClick} />
            </section>

            <section className="mask"></section>
        </>
    );
}

export default App;
