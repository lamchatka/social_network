import styles from "./MainContent.module.css";
import UserPosts from "../../UserPosts/UserPosts";
import Filters from "./Filters/Filters";

function MainContent() {
  return (
    <div className={styles["content"]}>
      <Filters />
      <UserPosts />
    </div>
  );
}

export default MainContent;
