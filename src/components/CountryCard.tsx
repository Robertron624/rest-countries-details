import { Country } from "../types";
import { NavLink } from "react-router-dom";
import "./CountryCard.scss";

const formatPopulation = (population: number) => {
    return population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const CountryCard = (country: Country) => {
    const { name, population, region, capital, flags } = country;

    return (
        <NavLink to={`/country/${name.common}`}>
            <div className="country-card text-left mx-auto">
                <div className="image-container">
                    <img src={flags.png} alt={`${name.common} flag`} />
                </div>
                <div className="bottom">
                    <h3 className="country-name">{name.common}</h3>
                    <div className="short-info">
                        <p>
                            <span>Population:</span>{" "}
                            {formatPopulation(population)}
                        </p>
                        <p>
                            <span>Region:</span> {region}
                        </p>
                        <p>
                            <span>Capital:</span> {capital ? capital : "N/A"}
                        </p>
                    </div>
                </div>
            </div>
        </NavLink>
    );
};

export default CountryCard;
