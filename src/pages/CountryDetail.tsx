import "./CountryDetail.scss";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import useSearch from "../hooks/useSearch";
import { NavLink } from "react-router-dom";
import { Currencies } from "../types";
import { Languages } from "../types";

interface Currency {
    name: string;
    symbol: string;
}

const getAllCurrencies = (currencies: Currencies): string => {
    if (!currencies) {
        return "N/A";
    }

    const currenciesAsString = Object.values(currencies).map(
        (currency: Currency) => {
            return currency.name;
        }
    );
    return currenciesAsString.join(", ");
};

const getAllLanguages = (languages: Languages): string => {
    if (!languages) {
        return "N/A";
    }

    const languagesAsString = Object.values(languages).map(
        (language: string) => {
            return language;
        }
    );
    return languagesAsString.join(", ");
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
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path
                        fill="currentcolor"
                        d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128z"
                    />
                </svg>
                Back
            </NavLink>
            <div className="country-details">
                {currentCountry && (
                    <div className="country-info">
                        <div className="flag-container">
                            <img
                                src={currentCountry.flags.png}
                                alt={`${currentCountry.name.common} flag`}
                            />
                        </div>
                        <div className="info-and-borders">
                            <div className="main-info">
                                <h1 className="country-name">
                                    {currentCountry.name.common}
                                </h1>
                                <div>
                                    <ul>
                                        <li>
                                            <span>Population:</span>{" "}
                                            {currentCountry.population.toLocaleString()}
                                        </li>
                                        <li>
                                            <span>Region:</span>{" "}
                                            {currentCountry.region}
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
                                            {getAllLanguages(
                                                currentCountry.languages
                                            )}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {currentCountry.borders ? (
                                <div className="borders">
                                    <h3>Border Countries:</h3>
                                    <div className="border-countries">
                                        {currentCountry.borders.map(
                                            (border) => {
                                                return (
                                                    <NavLink
                                                        to={`/country/${border}`}
                                                        key={border}
                                                        className="border-country"
                                                    >
                                                        {border}
                                                    </NavLink>
                                                );
                                            }
                                        )}
                                    </div>
                                </div>
                            ) : null}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CountryDetail;
