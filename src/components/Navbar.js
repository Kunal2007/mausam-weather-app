import React, { useState } from 'react'

const Navbar = (props) => {
    const { setForecast } = props;
    const [query, setQuery] = useState("");
    const baseUrl = process.env.REACT_APP_BASE_URL;
    const apiKey = process.env.REACT_APP_API_KEY;

    const getWeather = async (e) => {
        e.preventDefault();
        const url = `${baseUrl}/forecast.json?key=${apiKey}&q=${query}&days=3&aqi=yes&alerts=yes`
        try {
            let data = await (fetch(url));
            setForecast(await data.json());
        } catch (error) {
            console.log("Error:", error);
        }
        // console.log("forecast:", forecast);
    }

    const onChange = (e) => {
        setQuery(e.target.value);
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">MAUSAM</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Contact Us</a>
                        </li>
                        <li>
                            <form className="d-flex text-center" role="search" onSubmit={getWeather}>
                                <input className="form-control me-2" size="120" type="search" name="query" id="query" value={query} onChange={onChange} placeholder="Search for location" aria-label="Search" required />
                                <button className="btn btn-outline-info" type="submit">Search</button>
                            </form>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar