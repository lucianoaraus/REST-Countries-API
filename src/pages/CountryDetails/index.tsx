import { useParams } from "react-router-dom";

import styles from "./styles.module.scss";

const countryMock = {
  name: "Belgium",
  topLevelDomain: [".be"],
  alpha2Code: "BE",
  alpha3Code: "BEL",
  callingCodes: ["32"],
  capital: "Brussels",
  altSpellings: [
    "BE",
    "België",
    "Belgie",
    "Belgien",
    "Belgique",
    "Kingdom of Belgium",
    "Koninkrijk België",
    "Royaume de Belgique",
    "Königreich Belgien",
  ],
  subregion: "Western Europe",
  region: "Europe",
  population: 11555997,
  latlng: [50.83333333, 4],
  demonym: "Belgian",
  area: 30528,
  gini: 27.2,
  timezones: ["UTC+01:00"],
  borders: ["FRA", "DEU", "LUX", "NLD"],
  nativeName: "België",
  numericCode: "056",
  flags: {
    svg: "https://flagcdn.com/be.svg",
    png: "https://flagcdn.com/w320/be.png",
  },
  currencies: [
    {
      code: "EUR",
      name: "Euro",
      symbol: "€",
    },
  ],
  languages: [
    {
      iso639_1: "nl",
      iso639_2: "nld",
      name: "Dutch",
      nativeName: "Nederlands",
    },
    {
      iso639_1: "fr",
      iso639_2: "fra",
      name: "French",
      nativeName: "français",
    },
    {
      iso639_1: "de",
      iso639_2: "deu",
      name: "German",
      nativeName: "Deutsch",
    },
  ],
  translations: {
    br: "Belgia",
    pt: "Bélgica",
    nl: "België",
    hr: "Belgija",
    fa: "بلژیک",
    de: "Belgien",
    es: "Bélgica",
    fr: "Belgique",
    ja: "ベルギー",
    it: "Belgio",
    hu: "Belgium",
  },
  flag: "https://flagcdn.com/be.svg",
  regionalBlocs: [
    {
      acronym: "EU",
      name: "European Union",
    },
  ],
  cioc: "BEL",
  independent: true,
};

function CountryDetails() {
  const { country } = useParams();

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div
          className={styles.buttonContainer}
          onClick={() => alert("Go back!")}
        >
          Icon <button className={styles.button}>Back</button>
        </div>
        <div className={styles.countryData}>
          <div className={styles.countryFlagContainer}>
            <img
              src={countryMock.flag}
              alt={countryMock.name}
              className={styles.countryFlagImg}
            />
          </div>
          <div className={styles.countryText}>
            <h2>{countryMock.name}</h2>
            <div className={styles.countryDetails}>
              <div className={styles.leftColumn}>
                <p>
                  <strong>Native Name:</strong> {countryMock.nativeName}
                </p>
                <p>
                  <strong>Population:</strong> {countryMock.population}
                </p>
                <p>
                  <strong>Region:</strong> {countryMock.region}
                </p>
                <p>
                  <strong>Sub Region:</strong> {countryMock.subregion}
                </p>
                <p>
                  <strong>Capital:</strong> {countryMock.capital}
                </p>
              </div>
              <div className={styles.rightColumn}>
                <p>
                  <strong>Top Level Domain:</strong>
                  {countryMock.topLevelDomain}
                </p>
                <p>
                  <strong>Currencies:</strong>
                  {countryMock.currencies.map((currency) => currency.name)}
                </p>
                <p>
                  <strong>Languages:</strong>{" "}
                  {countryMock.languages.map((language) => language.name)}
                </p>
              </div>
            </div>
            <div className={styles.borderCountries}>
              <h3>Border Countries:</h3>
              <div className={styles.borderCountriesList}>
                {countryMock.borders.map((border) => (
                  <div className={styles.borderCountry}>{border}</div>
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
