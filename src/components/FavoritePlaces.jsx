import React, {useState} from 'react'
import {useSelector} from 'react-redux'
import './FavoritePlaces.css'
import  FavoriteIcon from "@material-ui/icons/Favorite"
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder"

const storage = window.localStorage;

function FavoritePlaces() {
    const appState = useSelector(state => state.results);
    const city = appState.city;

    const [liked,  setLiked] = useState(false);
    const [favoriteCities, setFavoriteCities] = useState([]);

    const saveToFavorite = () => {  
        let result = '';
        try {  
            result = storage.getItem("FavoriteCity");          
        }catch(err) {       
            //new Set([city])
            storage.setItem("FavoriteCity", city)
        } 

        if(result === '') {
            return;
        }
        if(result && result.indexOf(city) > -1) {
            return;
        }
           
        if(!result || result === '')
            result = city
        else 
            result = result + "," + city
        storage.setItem("FavoriteCity", result)    
        setLiked(!liked);
        let resultArr = result.split(',')
        setFavoriteCities(resultArr);       
    }

    return (
        <div className="favoriteBar" >
            <span>Save {city} To Favorite</span>
            <div className="favoriteBar__button">
                {liked? (<FavoriteIcon 
                    fontSize="large" 
                    onClick={saveToFavorite}
                />)
                : <FavoriteBorderIcon 
                    fontSize="large"
                    onClick={saveToFavorite}
                />
                }   

            </div> 
            <select >
            {
               favoriteCities.map(favorCity =>  <option key={favorCity} value={favorCity} >{favorCity}</option>)
            }
            </select>
                           
            
        </div>
    )
}
export default FavoritePlaces
