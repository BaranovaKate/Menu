import { Link } from "react-router-dom/cjs/react-router-dom.min";
import styles from "./SettingsAndTasks.module.css";
import commonStyles from "./CommonStyles.module.css";

const Tasks = () => {
  return (
    <section className={`${commonStyles.container} ${styles.container}`}>
      <ul>
        <li>
          <Link to="storage-accounting">Складской учет</Link>
        </li>
        <li>
          <Link to="accounting">Учет в производстве</Link>
        </li>
      </ul>
    </section>
  );
};

export default Tasks;
