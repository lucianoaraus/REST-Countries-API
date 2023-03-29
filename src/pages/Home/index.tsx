import { useMemo, useState } from "react";
import FilterSelect from "../../components/FilterSelect";
import { countriesData } from "../../utils/countries";
import { Link } from "react-router-dom";

import styles from "./styles.module.scss";

function Home() {
  const [region, setRegion] = useState("All Regions");
  const [search, setSearch] = useState("");

  const filterByRegion = (country) => {
    if (region === "All Regions") {
      return true;
    } else {
      return country.region === region;
    }
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filterByName = (country) =>
    country.name.toLowerCase().includes(search.toLowerCase());

  const countriesToDisplay = useMemo(
    () => countriesData.filter(filterByName).filter(filterByRegion),
    [region, search]
  );

  const renderCountry = (country) => {
    return (
      <div
        className={styles.card}
        key={country.name}
        onClick={() => <Link to={`/${country.name}`} />}
      >
        <img src={country.flag} alt={country.name} />
        <div className={styles.cardInfo}>
          <div className={styles.cardInfoWrapper}>
            <h3 className={styles.cardInfoTitle}>{country.name}</h3>
            <div className={styles.cardInfoDetails}>
              <p>
                <strong>Population:</strong> {country.population}
              </p>
              <p>
                <strong>Region:</strong> {country.region}
              </p>
              <p>
                <strong>Capital:</strong> {country.capital}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={styles.homeContainer}>
      <div className={styles.homeWrapper}>
        <div className={styles.inputs}>
          <input
            className={styles.searchInput}
            type="text"
            placeholder="Search for a country..."
            onChange={handleSearch}
            value={search}
          />
          <FilterSelect callBack={setRegion} />
        </div>
        <div className={styles.cardsContainer}>
          {countriesToDisplay.map(renderCountry)}
        </div>
      </div>
    </div>
  );
}

export default Home;
