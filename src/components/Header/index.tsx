import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import Brightness6OutlinedIcon from "@mui/icons-material/Brightness6Outlined";

import styles from "./styles.module.scss";

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={styles.header}>
      <div className={styles.content}>
        <div className={styles.leftSide}>
          <h3>Where in the world?</h3>
        </div>
        <div className={styles.rightSide} onClick={toggleTheme}>
          {theme === "light" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <Brightness6OutlinedIcon />
          )}
          {theme === "light" ? "Dark Mode" : "Light Mode"}
        </div>
      </div>
    </div>
  );
}

export default Header;
