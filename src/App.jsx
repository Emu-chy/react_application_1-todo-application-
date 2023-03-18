import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Header from "./components/Header";
import Scoreboard from "./components/Scoreboard";

function App() {
    const [addCounter, setAddCounter] = useState([]);

    const handleClick = () => {
        setAddCounter([...addCounter, { id: 1 }]);
    };
    return (
        <>
            <section className="section">
                <Header />
                <Scoreboard addCounter={addCounter} />
                <Button handleClick={handleClick} />
            </section>

            <section className="mask"></section>
        </>
    );
}

export default App;
