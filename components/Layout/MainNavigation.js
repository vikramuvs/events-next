import styles from "./MainNavigation.module.css";
import logo from "../../images/Institute of Technology.png";

function Layout(props) {
  return (
    <header>
      <div className={styles.header}>
        <div className={styles.logoContainer}>
          <img src={logo} alt="RIT | EVENTS" />
        </div>
        <div className={styles.headerTextContainer}>
            <h1>RIT EVENTS</h1>
        </div>
      </div>
    </header>
  );
}

export default Layout;
