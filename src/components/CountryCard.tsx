import { Country } from "../types";
import "./CountryCard.scss";
const CountryCard = (country: Country) => {
    const { name, population, region, capital, flags } = country;

    return (
        <div className="country-card">
            <div className="image-container">
                <img src={flags.png} alt={flags.alt} />
            </div>
            <div className="bottom">
                <h3 className="country-name">{name.official}</h3>
                <div className="short-info">
                    <p>
                        <span>Population:</span> {population}
                    </p>
                    <p>
                        <span>Region:</span> {region}
                    </p>
                    <p>
                        <span>Capital:</span> {capital}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CountryCard;
