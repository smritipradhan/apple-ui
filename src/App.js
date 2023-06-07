import styles from "./App.module.scss";
import LandingPage from "./pages/LandingPage/LandingPage";

const App = () => {
  return (
    <div className={styles.main}>
      <LandingPage />
    </div>
  );
};
export default App;
