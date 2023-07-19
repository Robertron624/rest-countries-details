import "./SearchResult.scss";

import useSearch from "../hooks/useSearch";
import CountryCard from "./CountryCard";

interface Props {
    searchTerm: string;
}

const SearchResult = ({ searchTerm }: Props) => {
    
    const { countries, isLoading, error } = useSearch(searchTerm);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            {countries.map((country) => (
                <CountryCard key={country.name.common} {...country} />
            ))}
        </div>
    );
};

export default SearchResult;
