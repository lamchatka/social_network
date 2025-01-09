import PropTypes from "prop-types";
import styles from "./Tab.module.css";
import { NavLink } from "react-router-dom";

// ПРОПСЫ - НЕИЗМЕНЯЕМЫЙ ОБЪЕКТ
function Tab(props) {
  Tab.propTypes = {
    tabName: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
  };

  return (
    <li className={styles.tab}>
      <NavLink
        to={props.path}
        className={({ isActive }) =>
          isActive ? `${styles.active}` : styles.tab
        }
      >
        {props.tabName}
      </NavLink>
    </li>
  );
}

export default Tab;
