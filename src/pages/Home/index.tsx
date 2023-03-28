import { useState } from "react";
import FilterSelect from "../../components/FilterSelect";
import { countriesData } from "../../utils/countries";

import styles from "./styles.module.scss";

function Home() {
  const [region, setRegion] = useState(undefined);

  const filterByRegion = (region) =>
    countriesData.filter((country) => country.region === region);

  return (
    <div className={styles.homeContainer}>
      <div className={styles.inputs}>
        <input type="text" placeholder="Search for a country..." />
        <FilterSelect callBack={setRegion} />
      </div>
      <div className={styles.cardsContainer}>
        {region !== undefined
          ? filterByRegion(region).map((country) => {
              return (
                <div className={styles.card} key={country.name}>
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
            })
          : countriesData.map((country) => {
              return (
                <div className={styles.card} key={country.name}>
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
            })}
      </div>
    </div>
  );
}

export default Home;
