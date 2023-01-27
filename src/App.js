import logo from "./logo.svg";
import "./App.css";
import { Chart } from "react-google-charts";

export const data = [
    ["auto", "amount (in hundreds)"],
    ["Lada", 117],
    ["Geely", 74],
    ["Volkswagen", 47],
    ["Renault", 42],
    ["Kia", 39],
    ["GAZ", 29],
    ["Huyndai", 25],
    ["Nissan", 17],
    ["УАЗ", 14],
    ["Škoda", 12],
    ["Toyota", 11],
    ["BMW, Audi, Mercedes", 13],
    ["other", 33],
];

export const options = {
    title: "Car market in Belarus in 2022",
    legend: "none",
    pieSliceText: "label",
    slices: {
        4: { offset: 0.2 },
        12: { offset: 0.3 },
        14: { offset: 0.4 },
        15: { offset: 0.5 },
    },
};

export function App() {
    return <Chart chartType = "PieChart"
    data = { data }
    options = { options }
    width = { "100%" }
    height = { "400px" }
    />;
}

export default App;