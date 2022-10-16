import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import React, {useEffect, useState} from 'react';
import axios from "axios";

function App() {

  // const [count,setCount] = useState(0);
  // const [bool,setBool] = useState(true)
  // const url = 'https://randomuser.me/api';
  // const [personalData, setPersonalData] = useState([{}])

    // useEffect(() => {
    //   fetch('${url}').then(
    //     res => res.json()
    //   ).then(
    //     data => {
    //       setPersonalData(data)
    //       console.log(data) 
    //     }
    //   )      
    // },[]);



    const apiKey="9a2ad428e17a3d712f0f1669ae64c6d9"
    const [inputCity,setInputCity] = useState("")
    const [data,setData] = useState({})

    const getweatherDetails = (cityName) =>  {
      if(!cityName) return
    const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey
      axios.get(apiURL).then((res) =>{
        console.log("response", res.data)
        setData(res.data)
      }).catch((err) => {
        console.log("err",err)
      })
    }


    const handleChangeInput = (e) => {
      console.log("value", e.target.value)
      setInputCity(e.target.value)
    }


    const handleSearch = () => {
      getweatherDetails(inputCity)
    }

    useEffect(() =>  {
    getweatherDetails("delhi")
    },[])


  return (
    // <div>
      <div className="col-md-12">
        <div className="weatherBg">
          <h1 className="heading">Weather App</h1>

          <div className="d-grid gap-3 col-4 mt-12">
            <input type="text" className="form-control" 
            value={inputCity}
            onChange={handleChangeInput} />
            <button className="btn btn-primary" type="button"
            onClick={handleSearch}
            >Search</button>
          </div>
        </div>

        {Object.keys(data).length > 0 &&
        <div className="col-md-12 text-center mt-5">
          <div className="shadow rounded weatherResultBox">

            <img className="weatherIcon"
            src="https://i.pinimg.com/originals/77/0b/80/770b805d5c99c7931366c2e84e88f251.png"/>

            <h5 className="weatherCity">
              {data?.name}
            </h5>
            <h6 className="weatherTemp">{((data?.main?.temp) - 273.15).toFixed(2)}°C</h6>
          </div>
        </div>
 
}
      </div>
  );
}

export default App;
