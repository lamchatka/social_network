import styles from "./UserTabs.module.css";
import TabsList from "./TabsList/TabsList";

function UserTabs() {
  return (
    <div className={styles["user-tabs"]}>
      <TabsList />
    </div>
  );
}

export default UserTabs;
