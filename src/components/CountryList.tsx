import axios from "axios";
import { useEffect, useState } from "react";
import { Country } from "../types";
import CountryCard from "./CountryCard";

import "./CountryList.scss";

const BASE_URL = "https://restcountries.com/v3.1/all";

const CountryList = () => {
    const [countries, setCountries] = useState<Country[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>("");

    useEffect(() => {
        const fetchCountries = async () => {
            setIsLoading(true);
            try {
                const response = await axios.get<Country[]>(BASE_URL);

                // limit the number of countries to 8

                const countries = response.data.slice(0, 8);
                setCountries(countries);
            } catch (error) {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        };
        void fetchCountries();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="list-container">
            {countries.map((country: Country) => (
                <CountryCard key={country.name.official} {...country} />
            ))}
        </div>
    );
};

export default CountryList;
