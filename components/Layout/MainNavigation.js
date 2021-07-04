import styles from "./MainNavigation.module.css";
import Image from 'next/image';
import logo from "../../images/Institute of Technology.png";


function MainNavigation(props) {
  return (
    <header>
      <div className={styles.header}>
        <div className={styles.logoContainer}>
        <Image src={logo} alt="RIT | EVENTS" />
        </div>
        <div className={styles.headerTextContainer}>
            <h1>RIT EVENTS</h1>
        </div>
      </div>
    </header>
  );
}

export default MainNavigation;
