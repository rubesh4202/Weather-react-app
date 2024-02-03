import axios from "axios"
import {useState} from "react"

function App() {

    const [deg, setdeg] = useState("");
    const [place, setplace] = useState("");
    const [status, setstatus] = useState("");
    const [inputvalue, setvalue] = useState("");

    function getInput(event){
        setvalue(event.target.value);
    }

    function getData()
    {
        var weatherdata = axios(`https://api.openweathermap.org/data/2.5/weather?q=${inputvalue}&appid=4e9346a794d70e36f7ef48d4eeb39830`);
        
        weatherdata.then(function(dalta)
    {
        setdeg(dalta.data.main.temp+"K")
        setstatus(dalta.data.weather[0].main)
        setplace(dalta.data.name)
    })
    }

    function resetData() {
        setdeg("");
        setstatus("");
        setplace("");
    }

    return (
        <div className="flex flex-row justify-center h-[100vh] items-center" >
            <div style={{backgroundImage: "linear-gradient(120deg, #a6c0fe 0%, #f68084 100%)"}} className="p-2 rounded-xl shadow w-2/4 h-3/5 flex flex-col items-center">
                <h1 className="font-medium text-5xl mt-2">Hey!⛅</h1>
                <p className="text-3xl mt-3">Do you want to know the weather report?</p>
                <input onChange={getInput} className="rounded-md mt-3 p-1 outline-none w-3/6 h-20 text-2xl text-center" placeholder="City Name"></input>
                <div className="flex flex-row">
                <button onClick={getData} className="bg-black text-white rounded-lg p-3 mt-4 text-2xl">Get report 🗲</button>
                <button onClick={resetData} className="bg-black text-white rounded-lg p-3 mt-4 text-2xl ml-4">Reset</button>
                </div>
                <p className="mt-3 text-2xl">City: {place} </p>
                <p className="mt-2 text-2xl">Temperature: {deg}</p>
                <p className="mt-2 text-2xl">Weather: {status} </p>
            </div>
        </div>
    )
}

export default App