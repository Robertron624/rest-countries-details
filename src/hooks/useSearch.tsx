import { useEffect, useState } from "react";
import { Country } from "../types";
import axios from "axios";

// custom hook for searching countries

const useSearch = (searchTerm: string) => {
    const [countries, setCountries] = useState<Country[]>([]);

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const [error, setError] = useState<string>("");

    useEffect(() => {
        let BASE_URL:string;

        // If the search term is 3 characters long, search by country code
        if(searchTerm.length === 3) {
            BASE_URL = `https://restcountries.com/v3.1/alpha/${searchTerm}`;
        } else {
            BASE_URL = `https://restcountries.com/v3.1/name/${searchTerm}`;
        }
        // Get all countries from the API
        const searchCountry = async () => {
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

        void searchCountry();
    }, [searchTerm]);

    return { countries, isLoading, error };
};

export default useSearch;