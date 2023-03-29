import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import Brightness6OutlinedIcon from "@mui/icons-material/Brightness6Outlined";

import styles from "./styles.module.scss";

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.content}>
        <div className={styles.leftSide}>
          <h3>Where in the world?</h3>
        </div>
        <div className={styles.rightSide}>
          <DarkModeOutlinedIcon />
          <button
            className={styles.switchThemeButton}
            onClick={() => alert("Switch Theme!")}
          >
            Dark Mode
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
