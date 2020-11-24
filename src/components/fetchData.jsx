const { REACT_APP_WEATHER_URL, REACT_APP_ZIPDATA} = process.env


async function fetchCoordData(zipCode) {
    try {
        const responseJson = await(await fetch(`${REACT_APP_ZIPDATA}state=MA`)).json();       
        return responseJson.records.filter((record) => zipCode === record.fields.zip)                 
    }catch (err) {
       return err;
    }

}


export async function fetchWeatherData(zipCode) {
    const coord = await fetchCoordData(zipCode);
    const {latitude, longitude, city} = coord[0].fields;

    try {
        //const responseJson = await(await(fetch(`https://api.weather.gov/gridpoints/BOX/70,79/forecast`))).json();
        // Little hacky here to get the redirected URL and 
        const redirectedURL = await(fetch(`${REACT_APP_WEATHER_URL}points/${latitude},${longitude}/forecast`));
        const weatherForecastJson = await(await (fetch(redirectedURL.url))).json();    
        //console.log(weatherForecastJson.properties);
        return  {
            "city" : city,
            "periods" : weatherForecastJson.properties.periods        
        }        
    }catch (err) {
        return err;
    }

}