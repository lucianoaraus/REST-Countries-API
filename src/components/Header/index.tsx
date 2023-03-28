import styles from "./styles.module.scss";

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.leftSide}>
        <h3>Where in the world?</h3>
      </div>
      <div className={styles.rightSide}>
        <button onClick={() => alert("Switch Theme!")}>Dark Mode</button>
      </div>
    </div>
  );
}

export default Header;
