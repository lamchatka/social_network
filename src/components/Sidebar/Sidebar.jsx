import classes from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={classes["fixed-sidebar"]}>
      <div className={classes["sidebar-toggle"]}>sidebar toggle</div>
      <div className={classes["sidebar-menu-wrap"]}>
        <div className={classes["custom-scrollbar"]}>
          <ul className={classes["side-menu"]}>
            <li>
              <a href="#p">NewsFeed</a>
            </li>
            <li>
              <a href="#m">Messages</a>
            </li>
            <li>
              <a href="#n">Friends</a>
            </li>
            <li>
              <a href="#m">Groups</a>
            </li>
            <li>
              <a href="#m">Music</a>
            </li>
            <li>
              <a href="#m">Videos</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
