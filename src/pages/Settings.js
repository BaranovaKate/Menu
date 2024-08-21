import { Link } from "react-router-dom/cjs/react-router-dom.min";
import styles from "./SettingsAndTasks.module.css";
import commonStyles from "./CommonStyles.module.css";
const Settings = () => {
  return (
    <section className={`${commonStyles.container} ${styles.container}`}>
      <ul>
        <li>
          <Link to="settings/a1">Настройка 1</Link>
        </li>
        <li>
          <Link to="settings/a2">Настройка 2</Link>
        </li>
      </ul>
    </section>
  );
};

export default Settings;
