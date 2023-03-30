import { useMemo, useState } from "react";
import FilterSelect from "../../components/FilterSelect";
import { countriesData } from "../../utils/countries";
import SearchIcon from "@mui/icons-material/Search";
import CountryCard from "../../components/Card";
import { Country } from "../../utils/interfaces";

import styles from "./styles.module.scss";

function Home() {
  const [region, setRegion] = useState("All Regions");
  const [search, setSearch] = useState("");

  const filterByRegion = (country: Country) => {
    if (region === "All Regions") {
      return true;
    } else {
      return country.region === region;
    }
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filterByName = (country: Country) =>
    country.name.toLowerCase().includes(search.toLowerCase());

  const countriesToDisplay = useMemo(
    () => countriesData.filter(filterByName).filter(filterByRegion),
    [region, search]
  );

  const renderCountry = (country: Country) => {
    return <CountryCard country={country} />;
  };

  return (
    <div className={styles.homeContainer}>
      <div className={styles.inputs}>
        <div className={styles.searchInputContainer}>
          <SearchIcon className={styles.searchIcon} />
          <input
            className={styles.searchInput}
            type="text"
            placeholder="Search for a country..."
            onChange={handleSearch}
            value={search}
          />
        </div>
        <FilterSelect callBack={setRegion} />
      </div>
      <div className={styles.homeWrapper}>
        <div className={styles.cardsContainer}>
          {countriesToDisplay.map(renderCountry)}
        </div>
      </div>
    </div>
  );
}

export default Home;
