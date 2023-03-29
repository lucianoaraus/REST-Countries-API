import { useContext } from "react";
import ThemeContext from "./context/ThemeContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import { ThemeProvider } from "./context/ThemeContext";
import CountryDetails from "./pages/CountryDetails";
import Home from "./pages/Home";

import styles from "./styles.module.scss";
import "./index.css";

function App() {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <ThemeProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:name" element={<CountryDetails />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
