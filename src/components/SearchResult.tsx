import "./SearchResult.scss";

import useSearch from "../hooks/useSearch";
import CountryCard from "./CountryCard";
import Spinner from "./Spinner";
import CountryNotFound from "./CountryNotFound";

interface Props {
    searchTerm: string;
}

const SearchResult = ({ searchTerm }: Props) => {
    
    const { countries, isLoading, error } = useSearch(searchTerm);

    if (isLoading) {
        return <Spinner />;
    }

    if (error) {
        return <CountryNotFound />
    }

    return (
        <div className="results-area">
            {countries.map((country) => (
                <CountryCard key={country.name.common} {...country} />
            ))}
        </div>
    );
};

export default SearchResult;
