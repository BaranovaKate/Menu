import { Link } from "react-router-dom/cjs/react-router-dom.min";
import styles from "./Home.module.css";
import commonStyles from "./CommonStyles.module.css";

const Home = () => {
  return (
    <section className={`${commonStyles.container} ${styles.container}`}>
      <ul>
        <li>
          <Link to="tasks">Задачи</Link>
        </li>
        <li>
          <Link to="settings">Настройки</Link>
        </li>
        <li>
          {/* Нужна ли тут страница с информацией? */}
          <Link to="somewhere">О системе</Link>
        </li>
      </ul>
    </section>
  );
};

export default Home;
