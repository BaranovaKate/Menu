import { NavLink, useHistory } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBar = () => {
  const history = useHistory();

  const handleGoBack = () => {
    history.goBack();
  };

  return (
    <footer className={styles.footer}>
      <nav className={styles.navBar}>
        <ul>
          <li>
            <NavLink
              to="/menu"
              className={`${styles.navLink} ${styles.menuLink}`}
            >
              Меню
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/scanner"
              className={`${styles.navLink} ${styles.menuLink}`}
            >
              Сканер
            </NavLink>
          </li>
          <li>
            <NavLink to="#" onClick={handleGoBack} className={styles.navLink}>
              <span className={styles.navLinkIcon}></span>
              Назад
            </NavLink>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default NavBar;
