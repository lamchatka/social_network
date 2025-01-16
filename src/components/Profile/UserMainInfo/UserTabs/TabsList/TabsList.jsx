import Tab from "./Tab/Tab";
import styles from "./TabsList.module.css";
import PropTypes from "prop-types";

function TabsList(props) {
  TabsList.propTypes = {
    tabNamesList: PropTypes.array,
  };

  return (
    <ul className={styles["tabs-list"]}>
      {props.tabNamesList.map((tab) => (
        <Tab key={tab.tabName} tabName={tab.tabName} path={tab.path} />
      ))}
    </ul>
  );
}

export default TabsList;
