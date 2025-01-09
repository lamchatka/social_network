import Tab from "./Tab/Tab";
import styles from "./TabsList.module.css";

function TabsList() {
  const tabNamesList = [
    { tabName: "Posts", path: "/posts" },
    { tabName: "About", path: "/about" },
    { tabName: "Friends", path: "/friends" },
    { tabName: "Groups", path: "/groups" },
    { tabName: "Photos", path: "/pho" },
    { tabName: "Videos", path: "/videos" },
    { tabName: "Badges", path: "/badges" },
    { tabName: "Forums", path: "/forums" },
  ];

  return (
    <ul className={styles["tabs-list"]}>
      {tabNamesList.map((tab) => (
        <Tab key={tab.tabName} tabName={tab.tabName} path={tab.path} />
      ))}
    </ul>
  );
}

export default TabsList;
