import styles from "./UserFeed.module.css";
import Filters from "./Filters/Filters";
import UserPosts from "../UserPosts/UserPosts";

function UserFeed() {
  return (
    <div className={styles["myFeed"]}>
      <Filters />
      <div className={styles["info"]}>Info</div>
      <UserPosts />
    </div>

  );
}

export default UserFeed;