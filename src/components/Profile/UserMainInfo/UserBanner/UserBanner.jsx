import classes from "./UserBanner.module.css";
import UserMedia from "./UserMedia/UserMedia";

function UserBanner() {
  // data about User
  return (
    <div className={classes["banner-user"]}>
      <div className={classes["banner-content"]}>
        <UserMedia />
      </div>
    </div>
  );
}

export default UserBanner;
