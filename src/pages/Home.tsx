import { useState } from "react";

import "./Home.scss";
import SearchCountry from "../components/SearchCountry";
import Filters from "../components/Filters";
import CountryList from "../components/CountryList";
import SearchResult from "../components/SearchResult";

import { Filter } from "../types";

const filtersOptions: Filter[] = [
    { name: "Africa", value: "africa" },
    { name: "America", value: "america" },
    { name: "Asia", value: "asia" },
    { name: "Europe", value: "europe" },
    { name: "Oceania", value: "oceania" },
];

function Home() {
    const [search, setSearch] = useState<string>("");
    const [currrentFilter, setCurrentFilter] = useState<Filter | null>(null);

    return (
        <>
            <div className="search-and-filters">
                <SearchCountry setSearchTerm={setSearch} />
                <Filters
                    filters={filtersOptions}
                    currentFilter={currrentFilter}
                    setCurrentFilter={setCurrentFilter}
                />
            </div>
                {/* If the search term is empty, show the countries list, otherwise (there IS a search term) show the results */}
                {search == "" ? (
                    <CountryList currentFilter={currrentFilter} />
                ) : (
                    <SearchResult searchTerm={search} />
                )}
        </>
    );
}

export default Home;
