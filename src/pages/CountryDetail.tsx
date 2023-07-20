import "./CountryDetail.scss";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import useSearch from "../hooks/useSearch";
import { NavLink } from "react-router-dom";
import { Currencies } from "../types";

interface Currency {
    name: string;
    symbol: string;
}

const getAllCurrencies = (currencies: Currencies): string => {
    const currenciesAsString = Object.values(currencies).map(
        (currency: Currency) => {
            return currency.name;
        }
    );
    return currenciesAsString.join(", ");
};

const CountryDetail = () => {
    const { country } = useParams();

    // force country to be a string
    const countryString = country as string;

    // Use hook to get the country details
    const { countries, isLoading, error } = useSearch(countryString);

    // If there is an error, show it
    if (error) return <h1>{error}</h1>;

    // If it's loading, show a loading message
    if (isLoading) return <Spinner />;

    const currentCountry = countries[0];

    return (
        <div className="country-page">
            <NavLink to={`/`} className="go-back">
                Back
            </NavLink>
            <div className="country-details">
                {currentCountry && (
                    <div className="country-info">
                        <div className="flag-container">
                            <img
                                src={currentCountry.flags.png}
                                alt={currentCountry.name.common}
                            />
                        </div>
                        <div className="main-info">
                            <h1 className="country-name">
                                {currentCountry.name.common}
                            </h1>
                            <ul>
                                <li>
                                    <span>Population:</span>{" "}
                                    {currentCountry.population.toLocaleString()}
                                </li>
                                <li>
                                    <span>Region:</span> {currentCountry.region}
                                </li>
                                <li>
                                    <span>Sub Region:</span>{" "}
                                    {currentCountry.subregion}
                                </li>
                                <li>
                                    <span>Capital:</span>{" "}
                                    {currentCountry.capital}
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <span>Top Level Domain:</span>{" "}
                                    {currentCountry.tld}
                                </li>
                                <li>
                                    <span>Currencies:</span>{" "}
                                    {getAllCurrencies(
                                        currentCountry.currencies
                                    )}
                                </li>
                                <li>
                                    <span>Languages:</span>{" "}
                                    {Object.values(
                                        currentCountry.languages
                                    ).join(", ")}
                                </li>
                            </ul>
                        </div>
                        <div className="borders">
                            <h3>Border Countries:</h3>
                            <div className="border-countries">
                                {currentCountry.borders.map((border) => {
                                    return (
                                        <NavLink
                                            to={`/country/${border}`}
                                            key={border}
                                            className="border-country"
                                        >
                                            {border}
                                        </NavLink>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CountryDetail;
