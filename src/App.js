import React, { useState } from "react"
import './App.css';


const Button = ({handleClick, text}) => (
    <button className="function_button" onClick={handleClick}>
        {text}
    </button>
);

const StatisticLine = ({current_value, text}) => {
    return(
        <tr>
            <td>{text}:</td>
            <td>{current_value}</td>
        </tr>
    );
}

const Statistics = ({train, bus, car}) => {
    if((train+bus+car) === 0){
        return(
            <div className="no_statistics">
                <h1>Yearly Statistics</h1>
                <h2>Nothing is currently being tracked</h2>
            </div>
        )
    }

    const total = train + bus + car;

    return(
        <div className="all_statistics">
            <h1>Yearly Statistics</h1>
                <table>
                    <StatisticLine text="Train" current_value={train}></StatisticLine>
                    <StatisticLine text="Bus" current_value={bus}></StatisticLine>
                    <StatisticLine text="Car" current_value={car}></StatisticLine>
                    <StatisticLine text="Total" current_value={total}></StatisticLine>
                </table>
        </div>
    );
}

function App() {
    const [train, trainVal] = useState(0);
    const trainUpdate = () => {
        trainVal(train + 1);
    }

    const [bus, busVal] = useState(0);
    const busUpdate = () => {
        busVal(bus + 1);
    }

    const [car, carVal] = useState(0);
    const carUpdate = () => {
        carVal(car + 1);
    }


    return (
        <div className = "main">
            <h1>Transportation Tracker</h1>
                <div className ="all_buttons">
                    <Button handleClick={trainUpdate} text="Train"></Button>
                    <Button handleClick={busUpdate} text="Bus"></Button>
                    <Button handleClick={carUpdate} text="Car"></Button>
                </div>
                
        <Statistics train={train} bus= {bus} car={car}></Statistics>
        </div>
    );
}

export default App;