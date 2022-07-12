import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HourForecast from './HourForecast';

const DayForecast = (props) => {
    const { day, text } = props;
    let slidesToShow = 1;
    if(window.screen.height < window.screen.width){
        slidesToShow = 2;
    }

    console.log(window.screen.height, window.screen.width);

    const settings = {
        dots: false,
        infinite: false,
        speed: 1000,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
    }

    const findType = (rain, snow) => {
        if (rain) {
            if (snow) {
                return "Rain and Snow";
            }
            else {
                return "Rain";
            }
        }
        else {
            if (snow) {
                return "Snow";
            }
            else {
                return "None";
            }
        }
    }

    return (
        <div className='container my-5'>
            <h1>{new Date(day.date).toDateString()} ({text})</h1>
            <h3>
                <img src={day.day.condition.icon} height="125" alt="Weather" />
                {day.day.maxtemp_c}<sup>o</sup>C / {day.day.mintemp_c}<sup>o</sup>C
            </h3>
            <h1 style={{ paddingLeft: "20px"}}>{day.day.condition.text.toUpperCase()}</h1>
            <table style={{ display: "inline", paddingRight: "30px", fontSize: "25px" }}>
                <tbody>
                    <tr>
                        <th>Average Temp.:</th>
                        <td>{day.day.avgtemp_c}<sup>o</sup>C</td>
                    </tr>
                    <tr>
                        <th width="220px">Max Wind Speed:</th>
                        <td>{day.day.maxwind_kph} kmph</td>
                    </tr>
                    <tr>
                        <th>UV Index:</th>
                        <td>{day.day.uv}</td>
                    </tr>
                </tbody>
            </table>
            <table style={{ display: "inline", paddingRight: "30px", fontSize: "25px" }}>
                <tbody>
                    <tr>
                        <th width="230px">Average Humidity:</th>
                        <td>{day.day.avghumidity}%</td>
                    </tr>
                    <tr>
                        <th>Average Visibility:</th>
                        <td>{day.day.avgvis_km} km</td>
                    </tr>
                    <tr>
                        <th>Total Precipitation:</th>
                        <td>{day.day.totalprecip_mm} mm</td>
                    </tr>
                </tbody>
            </table>
            <table style={{ display: "inline", paddingRight: "30px", fontSize: "25px" }}>
                <tbody>
                    <tr>
                        <th>Precipitation Type:</th>
                        <td>{findType(day.day.daily_will_it_rain, day.day.daily_will_it_snow)}</td>
                    </tr>
                    <tr>
                        <th width="230px">Chance of Rain:</th>
                        <td>{day.day.daily_chance_of_rain}%</td>
                    </tr>
                    <tr>
                        <th>Chance of Snow:</th>
                        <td>{day.day.daily_chance_of_snow}%</td>
                    </tr>
                </tbody>
            </table>

            <div className="container my-3">
            <Slider {...settings} >
                {day.hour.map((hour)=>{
                    return (<div key={hour.time_epoch}>
                        <HourForecast hour={hour}/>
                    </div>)
                })}
            </Slider>
            </div>

            <table style={{ display: "inline", paddingRight: "30px", fontSize: "25px" }}>
                <tbody>
                    <tr>
                        <th width="180px">Sunrise Time:</th>
                        <td>{day.astro.sunrise}</td>
                    </tr>
                    <tr>
                        <th>Sunset Time:</th>
                        <td>{day.astro.sunset}</td>
                    </tr>
                </tbody>
            </table>
            <table style={{ display: "inline", paddingRight: "30px", fontSize: "25px" }}>
                <tbody>
                    <tr>
                        <th width="200px">Moonrise Time:</th>
                        <td>{day.astro.moonrise}</td>
                    </tr>
                    <tr>
                        <th>Moonset Time:</th>
                        <td>{day.astro.moonset}</td>
                    </tr>
                </tbody>
            </table>
            <table style={{ display: "inline", paddingRight: "30px", fontSize: "25px" }}>
                <tbody>
                    <tr>
                        <th width="240px">Moon Phase:</th>
                        <td>{day.astro.moon_phase}</td>
                    </tr>
                    <tr>
                        <th>Moon Illumination:</th>
                        <td>{day.astro.moon_illumination}%</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default DayForecast
