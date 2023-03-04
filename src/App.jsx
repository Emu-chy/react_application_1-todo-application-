import "./App.css";
import Button from "./components/Button";
import Header from "./components/Header";
import ScoreBoard from "./components/ScoreBoard";

function App() {
    return (
        <>
            <section class="section">
                <Header />
                <ScoreBoard />
                <Button />
            </section>

            <section class="mask"></section>
        </>
    );
}

export default App;
