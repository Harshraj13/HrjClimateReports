import React from 'react';
import axios from 'axios';
import { useState } from 'react';

import './App.css';

function App() {
  
  // javascript for .bottom to change style property to visible
  
  
  const [data, setData] = useState({})

  const [location, setLocation] = useState(``)

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=6cef6702ee58d424df2f160c98f15191&units=metric `

  const searchLocation = (event)=>{
    if(event.key==='Enter'){
      axios.get(url).then((response)=>{
        setData(response.data)
        //console.log(response.data)
        
      })
      setLocation('')
      
  
    }
  }
  return (
   <div className='app'>
    <div className='searchBox'>
      <input 
      type="text" 
      value={location}
      onChange={event=>setLocation(event.target.value)}
      onKeyPress={searchLocation}
      placeholder="enter city">

      </input>
    </div>
    <div className='container'>
      <div className='top'>
        <div className='location'>
          <p className='city'>{data.name}</p>
        </div>
        <div className='description'>
          {data.main ?<h1>{data.main.temp.toFixed()} °C</h1>:null}
        </div>
      </div>
      {data.weather? <div className='bottom'>
        <div className='feels'>
          
          {data.weather? <p>Feels like : {data.weather[0].main} <br/>Mostly : {data.weather[0].description}</p>:null}
        </div>
        <div className='humidity'>
         
          {data.main? <p>Humidity :{data.main.humidity}%</p>:null}
        </div>
        <div className='wind'>
        {data.wind ? <p>Wind Speed : {data.wind.speed} MPH</p>:null }
          
        </div>
      </div>:null}

    </div>
    <footer>
      <h5>Dev HRJ</h5>
      <span>This website is purely developed for educational purposes</span>
      <span><br/>Copyrights © 2022 DevHRJ</span>
    </footer>
   </div>
  );
}

export default App;
