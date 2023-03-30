import { countriesData } from "../../utils/countries";
import { useParams, Link } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Country } from "../../utils/interfaces";

import styles from "./styles.module.scss";

interface RenderCountry {
  flag: string;
  name: string;
  nativeName: string;
  population: number;
  region: string;
  subregion: string;
  capital: string;
  topLevelDomain: string[];
  currencies: {
    name: string;
  }[];
  languages: {
    name: string;
  }[];
  borders: string[];
}

function CountryDetails() {
  const { name } = useParams();

  const countryFromParams = (country: Country) => country.name === name;

  const renderCountry = countriesData.find(countryFromParams);

  const {
    flag,
    nativeName,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies,
    languages,
    borders,
  } = renderCountry as RenderCountry;

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Link className={styles.buttonContainer} to="/">
          <KeyboardBackspaceIcon className={styles.arrowBackIcon} />
          <button className={styles.button}>Back</button>
        </Link>
        <div className={styles.countryData}>
          <div className={styles.countryFlagContainer}>
            <img src={flag} alt={name} className={styles.countryFlagImg} />
          </div>
          <div className={styles.countryText}>
            <h2>{name}</h2>
            <div className={styles.countryDetails}>
              <div className={styles.leftColumn}>
                <p>
                  <strong>Native Name:</strong> {nativeName}
                </p>
                <p>
                  <strong>Population:</strong> {population}
                </p>
                <p>
                  <strong>Region:</strong> {region}
                </p>
                <p>
                  <strong>Sub Region:</strong> {subregion}
                </p>
                <p>
                  <strong>Capital:</strong> {capital}
                </p>
              </div>
              <div className={styles.rightColumn}>
                <p>
                  <strong>Top Level Domain:</strong> {topLevelDomain}
                </p>
                <p>
                  <strong>Currencies:</strong>{" "}
                  {currencies.map((currency) => currency.name)}
                </p>
                <p>
                  <strong>Languages:</strong>{" "}
                  {languages.map((language) => language.name + "; ")}
                </p>
              </div>
            </div>
            <div className={styles.borderCountries}>
              <h3>Border Countries:</h3>
              <div className={styles.borderCountriesList}>
                {borders ? (
                  borders?.map((border) => (
                    <div className={styles.borderCountry} key={border}>
                      {border}
                    </div>
                  ))
                ) : (
                  <div className={styles.borderCountry}>None</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountryDetails;
