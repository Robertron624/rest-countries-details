import axios from "axios";
import { useEffect, useState } from "react";
import { Country, Filter } from "../types";
import CountryCard from "./CountryCard";
import Spinner from "./Spinner";

import "./CountryList.scss";

const BASE_URL = "https://restcountries.com/v3.1/all";

interface Props {
    currentFilter: Filter | null;
}
const CountryList = ({ currentFilter }: Props) => {
    const [countries, setCountries] = useState<Country[]>([]);

    const [displayedCountries, setDisplayedCountries] = useState<Country[]>([]);

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>("");

    useEffect(() => {
        // Get all countries from the API, firts show 8 countries then add more when the user scrolls down

        const getCountries = async () => {
            setIsLoading(true);
            try {
                const response = await axios.get<Country[]>(BASE_URL);
                setCountries(response.data);
                setDisplayedCountries(response.data.slice(0, 9));
            } catch (error) {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        };

        const filterCountries = async (filter: Filter) => {
            const filterZoneUrl = `https://restcountries.com/v3.1/region/${filter.name}`;

            setIsLoading(true);

            try {
                const response = await axios.get<Country[]>(filterZoneUrl);
                setCountries(response.data);
                setDisplayedCountries(response.data.slice(0, 9));
            } catch (error) {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        };

    
        if (currentFilter) {
            void filterCountries(currentFilter);
        } else {
            void getCountries();
        }
    
    }, [currentFilter]);

    // Watch when the user scrolls down to add more countries to the list taking into account the current filter
    
    useEffect(() => {
        const handleScroll = () => {
            const { scrollTop, clientHeight, scrollHeight } =
                document.documentElement;
            if (scrollTop + clientHeight >= scrollHeight - 5) {
                setDisplayedCountries((prev) => [
                    ...prev,
                    ...countries.slice(prev.length, prev.length + 9),
                ]);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [countries]);


    if (isLoading) {
        return <Spinner />;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="list-container">
            {displayedCountries.map((country) => (
                <CountryCard key={country.name.common} {...country} />
            ))}
        </div>
    );
};

export default CountryList;
