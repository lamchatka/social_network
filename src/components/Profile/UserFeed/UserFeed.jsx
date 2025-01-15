import styles from "./UserFeed.module.css";
import MainContent from "./MainContent/MainContent";
import InfoSidebar from "./InfoSidebar/InfoSidebar";

function UserFeed() {
  return (
    <div className={styles["myFeed"]}>
      <MainContent />
      <InfoSidebar />
    </div>
  );
}

export default UserFeed;
