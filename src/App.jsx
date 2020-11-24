import React, {useState, useEffect, useRef} from 'react';
import { useDispatch } from 'react-redux'
import { GetData } from './redux/WeatherActions'
import './App.css'
import Content from './components/Content';
import FavoritePlaces from './components/FavoritePlaces'

function App() {
  const [zipCode, setZipCode] = useState('02111');
  const dispatch = useDispatch();
  const inputEl = useRef(null);

  const onSubmit = (event) => {
    event.preventDefault();   
    setZipCode(inputEl.current.value);
    //dispatch(GetData(zipCode));
  }

  useEffect(() => {
     dispatch(GetData(zipCode));
  }, [zipCode])

  return (
      <div className="App">     
        <div className="weather">
          <div className="weather__search">
            <form onSubmit={onSubmit}>
                <input type="text" id="country_code" name="country_code" 
                  className="weather__input" maxLength={5} ref={inputEl}
                  pattern="[0-9]{5}" title="5 digit zip code" placeholder="02111" />
                <button type="submit" className="weather__button" >Show Me The Future</button>
            </form>
          </div>
          {/** Favorite City banner*/}
          <FavoritePlaces />
          <div className="weather__result">            
            <Content />
          </div>
        </div>
      </div>
  );
}

export default App;
