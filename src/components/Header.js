import { useLocation } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  const location = useLocation();

  const getTitle = () => {
    switch (location.pathname) {
      case "/menu":
        return "Меню";
      case "/scanner":
        return "Сканировать номер обьекта";
      case "/tasks":
        return "Задачи";
      case "/accounting":
        return "Учет в производстве";
      case "/settings":
        return "Настройки";
      default:
        return "Меню";
    }
  };

  return (
    <header className={styles.header}>
      <ul>
        <li>{getTitle()}</li>
      </ul>
    </header>
  );
};

export default Header;
