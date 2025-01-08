import PropTypes from "prop-types";
import styles from "./Tab.module.css";

function Tab(props) {
  Tab.propTypes = {
    tabName: PropTypes.string.isRequired,
  };

  return (
    <li className={styles["tab"]}>
      <a href="">{props.tabName}</a>
    </li>
  );
}

export default Tab;
