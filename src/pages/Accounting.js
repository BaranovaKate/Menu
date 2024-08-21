import { Link } from "react-router-dom/cjs/react-router-dom.min";
import styles from "./Accounting.module.css";
import commonStyles from "./CommonStyles.module.css";
const Accounting = () => {
  return (
    <section className={`${commonStyles.container} ${styles.container}`}>
      {/* somewhere - временная загушка, пока нет страниц с инпутами */}
      <ul>
        <li>
          <Link to="somewhere">Акты инвентаризации</Link>
        </li>
        <li>
          <Link to="somewhere">Внутризаводские накладные (Приход)</Link>
        </li>
        <li>
          <Link to="somewhere">Внутризаводские накладные (Расход)</Link>
        </li>
        <li>
          <Link to="somewhere">Лимитные карты (Приход)</Link>
        </li>
        <li>
          <Link to="somewhere">Цеховая номенклатура</Link>
        </li>
      </ul>
    </section>
  );
};

export default Accounting;
