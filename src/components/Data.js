import React from 'react'
import DayForecast from './DayForecast';

const Data = (props) => {
    const { forecast } = props;

    return (
        <>
            {console.log("forecast:", forecast)}
            {forecast &&
                (<font color="white">
                    <div className="container" style={{ paddingTop: "30px" }}>
                        {forecast.error ? (<h1>{forecast.error.message}</h1>) :
                            <>
                                <h1>LOCATION: {forecast.location.name}, {forecast.location.region}, {forecast.location.country}</h1>
                                <h3>Latitude: {Math.abs(forecast.location.lat)}<sup>o</sup>{(forecast.location.lat > 0) ? "N" : "S"}, Longitude: {Math.abs(forecast.location.lon)}<sup>o</sup>{(forecast.location.lon > 0) ? "E" : "W"}</h3>
                                <h6>(Last updated on {new Date(forecast.current.last_updated).toDateString()} at {new Date(forecast.current.last_updated).toLocaleTimeString()})</h6>
                                <div className='container'>
                                    <h1>
                                        <img src={forecast.current.condition.icon} height="150" alt="Weather" />
                                        {forecast.current.temp_c}<sup>o</sup>C
                                    </h1>
                                    <h1 style={{paddingLeft: "20px"}}>{forecast.current.condition.text.toUpperCase()}</h1>
                                    <table style={{ display: "inline", paddingRight: "30px", fontSize: "25px" }}>
                                        <tbody>
                                            <tr>
                                                <th width="160px">Feels Like:</th>
                                                <td>{forecast.current.feelslike_c}<sup>o</sup>C</td>
                                            </tr>
                                            <tr>
                                                <th>Cloud Cover:</th>
                                                <td>{forecast.current.cloud}%</td>
                                            </tr>
                                            <tr>
                                                <th>Gust Speed:</th>
                                                <td>{forecast.current.gust_kph} kmph</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <table style={{ display: "inline", paddingRight: "30px", fontSize: "25px" }}>
                                        <tbody>
                                            <tr>
                                                <th width="130px">Humidity:</th>
                                                <td>{forecast.current.humidity}%</td>
                                            </tr>
                                            <tr>
                                                <th>Visibility:</th>
                                                <td>{forecast.current.vis_km} km</td>
                                            </tr>
                                            <tr>
                                                <th>UV Index:</th>
                                                <td>{forecast.current.uv}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <table style={{ display: "inline", paddingRight: "30px", fontSize: "25px" }}>
                                        <tbody>
                                            <tr>
                                                <th width="180px">Wind Velocity:</th>
                                                <td>{forecast.current.wind_kph} kmph {forecast.current.wind_dir}</td>
                                            </tr>
                                            <tr>
                                                <th>Atm. Pressure:</th>
                                                <td>{forecast.current.pressure_mb} mb</td>
                                            </tr>
                                            <tr>
                                                <th>Precipitation:</th>
                                                <td>{forecast.current.precip_mm} mm</td>
                                            </tr>
                                        </tbody>
                                    </table><br />
                                    <b style={{ display: "inline", paddingRight: "15px", fontSize: "25px" }}>Air Pollutants: </b>
                                    <span style={{ display: "inline", fontSize: "25px" }}>
                                        CO: {forecast.current.air_quality.co.toFixed(1)} &nbsp;
                                        NO<sub>2</sub>: {forecast.current.air_quality.no2.toFixed(1)} &nbsp;
                                        O<sub>3</sub>: {forecast.current.air_quality.o3.toFixed(1)} &nbsp;
                                        SO<sub>2</sub>: {forecast.current.air_quality.so2.toFixed(1)} &nbsp;
                                        PM<sub>2.5</sub>: {forecast.current.air_quality.pm2_5.toFixed(1)} &nbsp;
                                        PM<sub>10</sub>: {forecast.current.air_quality.pm10.toFixed(1)}
                                    </span>
                                </div>
                                <DayForecast day={forecast.forecast.forecastday[0]} text="Today"/>
                                <DayForecast day={forecast.forecast.forecastday[1]} text="Tomorrow"/>
                                <DayForecast day={forecast.forecast.forecastday[2]} text="Day after Tomorrow"/>
                            </>
                        }
                    </div>
                </font>)
            }
        </>
    )
}

export default Data
