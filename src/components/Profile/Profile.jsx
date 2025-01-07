import classes from "./Profile.module.css";
import UserBanner from "./UserBanner/UserBanner";

const Profile = () => {
  console.log(classes);
  return (
    <div className={classes["content"]}>
      <div className={classes["container"]}>
        <div className={classes["buddypress-member-home"]}>
          <UserBanner />
          <div className={classes["user-nav"]}>
            <div className={classes["user-top-header"]}>
              <ul className="menu-list">
                <li><a href="">Timeline</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Friends</a></li>
                <li><a href="">Groups</a></li>
                <li><a href="">Photos</a></li>
                <li><a href="">Videos</a></li>
                <li><a href="">Badges</a></li>
                <li><a href="">Forums</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className={classes["add-post"]}>
          <input type="text" />
          <button>Add new post</button>
        </div>

      </div>
    </div>
  );
};

export default Profile;
