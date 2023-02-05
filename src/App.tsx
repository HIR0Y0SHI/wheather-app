import { useState } from "react";

import Title from './components/Title';
import Form from './components/Form';
import Result from './components/Result';
import Loading from "./components/Loading";

import './App.css';

type ResultStateType = {
  country: string;
  cityName: string;
  temperature: string;
  conditionText: string;
  icon: string;
}


function App() {
  const [loading, setLoading] = useState<boolean>(false);
  const [city, setCity] = useState<string>("");
  const [result, setResult] = useState<ResultStateType>({
    country: "",
    cityName: "",
    temperature: "",
    conditionText: "",
    icon: ""
  });
  const getWeather = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setLoading(true);
      fetch(`http://api.weatherapi.com/v1/current.json?key=66de67c4dc88421982a234305232901&q=${city}&aqi=no`)
          .then(res => res.json())
          .then(data => {
            setResult({
              country: data.location.country,
              cityName: data.location.name,
              temperature: data.current.temp_c,
              conditionText: data.current.condition.text,
              icon: data.current.condition.icon
            })
            setCity("");
            setLoading(false);
          })
          .catch(err => {
            alert("Error: " + err.message);
            setLoading(false);
          })
  }

  return (
    <div className="wrapper">
      <div className="container">
        <Title />
        <Form setCity={setCity} city={city} getWeather={getWeather}/>
        {loading ? <Loading /> : <Result result={result} />}
      </div>
    </div>
  );
}

export default App;
