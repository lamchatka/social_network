import styles from "./Profile.module.css";
import UserBanner from "./UserBanner/UserBanner";
import UserTabs from "./UserTabs/UserTabs";

const Profile = () => {
  console.log(styles);
  return (
    <div className="content">
      <div className="buddypress-member-home">
        <UserBanner />
        <UserTabs />
      </div>
    </div>
  );
};

export default Profile;
