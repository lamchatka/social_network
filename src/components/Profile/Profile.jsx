import styles from "./Profile.module.css";
import UserMainInfo from "./UserMainInfo/UserMainInfo";

const Profile = () => {
  console.log(styles);
  return (
    <div className="profile-content">
      <UserMainInfo />
      <div>My posts</div>
      <div>info about me</div>
      <div>my friends list</div>
    </div>
  );
};

export default Profile;
