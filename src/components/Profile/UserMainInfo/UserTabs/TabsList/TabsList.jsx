import Tab from "./Tab/Tab";
import styles from "./TabsList.module.css";

function TabsList() {
  const tabNamesList = [
    { tabName: "Posts", selected: true, path: "/posts" },
    { tabName: "About", selected: false, path: "/about" },
    { tabName: "Friends", selected: false, path: "/friends" },
    { tabName: "Groups", selected: false, path: "/groups" },
    { tabName: "Photos", selected: false, path: "/groups" },
    { tabName: "Videos", selected: false, path: "/videos" },
    { tabName: "Badges", selected: false, path: "/badges" },
    { tabName: "Forums", selected: false, path: "/forums" },
  ];

  //TODO СДЕЛАТЬ ПЕРЕКЛЮЧАЛКУ МЕЖДУ ТАБАМИ (ДИНАМИЧЕСКИ МЕНЯТЬ КЛАСС ACTIVE) ХЗ КАК ЭТО СДЕЛАТЬ БЕЗ USESTATE

  return (
    <ul className={styles["tabs-list"]}>
      {tabNamesList.map((tab) => (
        <Tab key={tab.tabName} tabName={tab.tabName} path={tab.path} />
      ))}
    </ul>
  );
}

export default TabsList;
