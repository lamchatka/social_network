import styles from "./UserTabs.module.css";
import TabsList from "./TabsList/TabsList";
import PropTypes from "prop-types";

function UserTabs(props) {
  UserTabs.propTypes = {
    profilePage: PropTypes.object,
  };
  
  return (
    <div className={styles["user-tabs"]}>
      <TabsList tabNamesList={props.profilePage.tabNamesList} />
    </div>
  );
}

export default UserTabs;
