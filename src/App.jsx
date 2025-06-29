import styles from "./App.module.css";
import Navbar from "./components/Navbar/Navbar.jsx";

function App() {
  return (
    <div className={styles.rootContainer}>
      <header className={styles.header}>
        <Navbar />
      </header>
    </div>
  );
}

export default App;
