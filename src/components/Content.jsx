/**
 * Weather result table for 3/7/max day
 * But the max is 7 days anyway
 */

import React from 'react'
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './Content.css'


function Content() {
    const appState = useSelector(state => state.results);
    const weatherData = appState.data;
    console.log(weatherData);

    return (
        <div className="content">
            <Tabs>
                <TabList>
                <Tab>3 Days</Tab>
                <Tab>7 Days</Tab>
                <Tab>Max</Tab>
                </TabList>

                <TabPanel>
                   { 
                     weatherData ? weatherData.map((data, index) => index < 6 ?
                     (                       
                        <span title={data.detailedForecast} className="daily__weather" key={uuidv4()} >
                            <div>{data.name}</div>
                            <div>{data.temperature} F</div>
                            <div>{data.windSpeed} {data.windDirection}</div>
                            <div>{data.shortForecast}</div>
                            
                            <img src={data.icon} className="icon" alt="weatherPeriod" />
                        </span>                      
                     ): '')
                     : (
                         <div><h3>Waiting for Data</h3></div>
                    )  
                   }
                </TabPanel>
                <TabPanel>
                { 
                     weatherData ? weatherData.map((data, index) => index < 14 ?
                     (                   
                        <span title={data.detailedForecast} className="daily__weather" key={uuidv4()} >
                            <div>{data.name}</div>
                            <div>{data.temperature} F</div>
                            <div>{data.windSpeed} {data.windDirection}</div>
                            <div>{data.shortForecast}</div>
                            
                            <img src={data.icon} className="icon" alt={data.shortForecast} />
                        </span>                        
                     ): '')
                     : (
                         <div><h3>Waiting for Data</h3></div>
                    )  
                   }
                </TabPanel>
                <TabPanel>
                { 
                     weatherData ? weatherData.map((data) => 
                     (                   
                        <span title={data.detailedForecast} className="daily__weather" key={uuidv4()} >
                            <div>{data.name}</div>
                            <div>{data.temperature} F</div>
                            <div>{data.windSpeed} {data.windDirection}</div>
                            <div>{data.shortForecast}</div>
                            
                            <img src={data.icon} className="icon" alt={data.shortForecast}/>
                        </span>                      
                     )): (
                         <div><h3>Waiting for Data</h3></div>
                    )  
                   }
                </TabPanel>
            </Tabs>
        </div>
    )
}

export default Content
