import styles from "./styles.module.scss";

function CountryDetails() {
  return (
    <div className={styles.container}>
      <div className={styles.button}>
        Icon <button>Back</button>
      </div>
      <div className={styles.countryData}>
        <div className={styles.countryFlag}>Flag</div>
        <div className={styles.countryText}>
          <h2>Title</h2>
          <div className={styles.countryDetails}>
            <div className={styles.leftColumn}>left</div>
            <div className={styles.rightColumn}>right</div>
          </div>
          <div className={styles.borderCountries}>
            <h3>Border Countries:</h3>
            <div className={styles.borderCountriesList}>
              <button>Country</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountryDetails;
