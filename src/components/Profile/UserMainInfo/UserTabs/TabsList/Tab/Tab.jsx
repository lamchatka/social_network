import PropTypes from "prop-types";
import styles from "./Tab.module.css";
import { NavLink } from "react-router-dom";

function Tab(props) {
  Tab.propTypes = {
    tabName: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
  };

  return (
    <li className={styles.tab}>
      <NavLink
        to={props.path}
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        {props.tabName}
      </NavLink>
    </li>
  );
}

export default Tab;
