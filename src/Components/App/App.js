import { useEffect, useState } from 'react';
import { InfoLocated } from '../InfoLocared/InfoLocated';
import { InfoTime } from '../InfoTime/InfoTime';
import { MapComponent } from '../MapLocated/Map.js';
import { People } from '../People/People';
import './App.scss';

function App() {

  const [coord, setCoord] = useState(
    {'latitude': '0', 'longitude': '0'}
  );
  const [date, setDate] = useState();
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      fetch('http://api.open-notify.org/iss-now.json')
      .then((responce) => {
          return responce.json();
      })
      .then(data => {
          setCoord(data.iss_position);
          setDate(data.timestamp);
      });
      return () => clearInterval(intervalId);
    }, 5000);
  }, []);

  if (coord) {
    return (
      <div className="App">
        <div className='app-container'>
          <InfoLocated coord={coord} />
          <InfoTime date={date} />
          <MapComponent coord={coord} />
          <People />
        </div>
      </div>
    )
  }
  
}

export default App;
