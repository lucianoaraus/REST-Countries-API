import { Link } from "react-router-dom";
import { Country } from "../../utils/interfaces";

import styles from "./styles.module.scss";

interface Props {
  country: Country;
}

function CountryCard({ country }: Props) {
  return (
    <Link className={styles.card} key={country.name} to={`/${country.name}`}>
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
    </Link>
  );
}

export default CountryCard;
