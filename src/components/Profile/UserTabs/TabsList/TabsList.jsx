import Tab from "./Tab/Tab";
import styles from "./TabsList.module.css";

function TabsList() {
  const tabNamesList = [
    { tabName: "Timeline", selected: true },
    { tabName: "About", selected: false },
    { tabName: "Friends", selected: false },
    { tabName: "Groups", selected: false },
    { tabName: "Photos", selected: false },
    { tabName: "Videos", selected: false },
    { tabName: "Forums", selected: false },
  ];

  return (
    <ul className={styles["tabs-list"]}>
      {tabNamesList.map((tab) => (
        <Tab key={tab.tabName} tabName={tab.tabName} />
      ))}
    </ul>
  );
}

export default TabsList;
