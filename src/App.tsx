import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import CountryDetails from "./pages/CountryDetails";
import Home from "./pages/Home";

import styles from "./styles.module.scss";

function App() {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:name" element={<CountryDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
