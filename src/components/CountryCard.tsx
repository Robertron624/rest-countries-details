import { Country } from "../types";
import "./CountryCard.scss";
const CountryCard = (country: Country) => {
    const { name, population, region, capital, flags } = country;

    return (
        <div className="country-card text-left mx-auto">
            <div className="image-container">
                <img src={flags.png} alt={flags.alt} />
            </div>
            <div className="bottom">
                <h3 className="country-name">{name.common}</h3>
                <div className="short-info">
                    <p>
                        <span>Population:</span> {population}
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
    );
};

export default CountryCard;
