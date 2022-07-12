import React from 'react'

const HourForecast = (props) => {
    const { hour } = props;

    const findTime = (time) => {
        let d = new Date(time).toLocaleTimeString();
        if(d.indexOf(':') === 1){
            d = '0' + d;
        }
        return d.slice(0,5) + d.slice(8);
    }

    return (
        <div className="container my-5 text-center">
            <h3>{findTime(hour.time)}</h3>
            <h1>
                <img style={{display: "inline"}} src={hour.condition.icon} height="100" alt="Weather" />
                {hour.temp_c}<sup>o</sup>C
            </h1>
            <h5>{hour.condition.text.toUpperCase()}</h5>
            <table style={{display: "inline", textAlign: "left", paddingRight: "30px"}}>
                <tbody>
                    <tr>
                        <th width="100px">Humidity:</th>
                        <td>{hour.humidity}%</td>
                    </tr>
                    <tr>
                        <th>Cloud Cover:</th>
                        <td>{hour.cloud}%</td>
                    </tr>
                    <tr>
                        <th>Feels Like:</th>
                        <td>{hour.feelslike_c}<sup>o</sup>C</td>
                    </tr>
                    <tr>
                        <th>Wind Chill:</th>
                        <td>{hour.windchill_c}<sup>o</sup>C</td>
                    </tr>
                    <tr>
                        <th>Heat Index:</th>
                        <td>{hour.heatindex_c}<sup>o</sup>C</td>
                    </tr>
                    <tr>
                        <th>Dew Point:</th>
                        <td>{hour.dewpoint_c}<sup>o</sup>C</td>
                    </tr>
                    <tr>
                        <th>UV Index:</th>
                        <td>{hour.uv}</td>
                    </tr>
                    <tr>
                        <th>Visibility:</th>
                        <td>{hour.vis_km} km</td>
                    </tr>
                </tbody>
            </table>
            <table style={{display: "inline", textAlign: "left"}}>
                <tbody>
                    <tr>
                        <th width="130px">Precipitation:</th>
                        <td>{hour.precip_mm} mm</td>
                    </tr>
                    <tr>
                        <th>Wind Velocity:</th>
                        <td>{hour.wind_kph} kmph {hour.wind_dir}</td>
                    </tr>
                    <tr>
                        <th>Will it Rain:</th>
                        <td>{hour.will_it_rain ? "Likely" : "Unlikely"}</td>
                    </tr>
                    <tr>
                        <th>Will it Snow:</th>
                        <td>{hour.will_it_snow ? "Likely" : "Unlikely"}</td>
                    </tr>
                    <tr>
                        <th>Chance of Rain:</th>
                        <td>{hour.chance_of_rain}%</td>
                    </tr>
                    <tr>
                        <th>Chance of Snow:</th>
                        <td>{hour.chance_of_snow}%</td>
                    </tr>
                    <tr>
                        <th>Gust speed:</th>
                        <td>{hour.gust_kph} kmph</td>
                    </tr>
                    <tr>
                        <th>Atm. Pressure:</th>
                        <td>{hour.pressure_mb} mb</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default HourForecast