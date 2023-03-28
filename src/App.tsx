import Header from "./components/Header";
import Home from "./pages/Home";

import styles from "./styles.module.scss";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Home />
    </div>
  );
}

export default App;
