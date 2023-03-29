import { countriesData } from "../../utils/countries";
import { useParams, Link } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

import styles from "./styles.module.scss";

function CountryDetails() {
  const { name } = useParams();

  const countryFromParams = (country) => country.name === name;
  const renderCountry = countriesData.find(countryFromParams);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Link className={styles.buttonContainer} to="/">
          <KeyboardBackspaceIcon className={styles.arrowBackIcon} />
          <button className={styles.button}>Back</button>
        </Link>
        <div className={styles.countryData}>
          <div className={styles.countryFlagContainer}>
            <img
              src={renderCountry.flag}
              alt={renderCountry.name}
              className={styles.countryFlagImg}
            />
          </div>
          <div className={styles.countryText}>
            <h2>{renderCountry.name}</h2>
            <div className={styles.countryDetails}>
              <div className={styles.leftColumn}>
                <p>
                  <strong>Native Name:</strong> {renderCountry.nativeName}
                </p>
                <p>
                  <strong>Population:</strong> {renderCountry.population}
                </p>
                <p>
                  <strong>Region:</strong> {renderCountry.region}
                </p>
                <p>
                  <strong>Sub Region:</strong> {renderCountry.subregion}
                </p>
                <p>
                  <strong>Capital:</strong> {renderCountry.capital}
                </p>
              </div>
              <div className={styles.rightColumn}>
                <p>
                  <strong>Top Level Domain:</strong>{" "}
                  {renderCountry.topLevelDomain}
                </p>
                <p>
                  <strong>Currencies:</strong>{" "}
                  {renderCountry.currencies.map((currency) => currency.name)}
                </p>
                <p>
                  <strong>Languages:</strong>{" "}
                  {renderCountry.languages.map(
                    (language) => language.name + "; "
                  )}
                </p>
              </div>
            </div>
            <div className={styles.borderCountries}>
              <h3>Border Countries:</h3>
              <div className={styles.borderCountriesList}>
                {renderCountry.borders?.map((border) => (
                  <div className={styles.borderCountry} key={border}>
                    {border}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountryDetails;
