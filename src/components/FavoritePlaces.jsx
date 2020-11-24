import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import './FavoritePlaces.css'
import  FavoriteIcon from "@material-ui/icons/Favorite"
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder"
import { GetData } from '../redux/WeatherActions'

const storage = window.localStorage;

function FavoritePlaces() {
    const appState = useSelector(state => state.results);
    const city = appState.city;
    const dispatch = useDispatch();

    const [liked,  setLiked] = useState(false);
    const [favoriteCities, setFavoriteCities] = useState([]);

    useEffect(() => {
        try {
            let result = storage.getItem("FavoriteCity");  
            let resultArr = result.split(',')
            setFavoriteCities(resultArr);   
        }catch(err){ }
    },[])

    const handleSelected = e => {
        const cityZip = e.target.value;
        const zip = cityZip.split('|')[1];
        dispatch(GetData(zip));
    }

    const saveToFavorite = () => {  
        let result = '';
        try {  
            result = storage.getItem("FavoriteCity");          
        }catch(err) {       
            //new Set([city])
            storage.setItem("FavoriteCity", city)
        } 
        console.log(result)
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
            <select onChange={e => handleSelected(e)}>
            {
               favoriteCities.map(favorCity => ( 
                    <option 
                        key={favorCity} 
                        value={favorCity}                         
                        >{favorCity}</option>
                
                ))
            }
            </select>
                           
            
        </div>
    )
}
export default FavoritePlaces
