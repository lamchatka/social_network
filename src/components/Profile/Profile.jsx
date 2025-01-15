import styles from "./Profile.module.css";
import UserMainInfo from "./UserMainInfo/UserMainInfo";
import UserAbout from "./UserAbout/UserAbout";
import { Routes, Route } from "react-router-dom";
import UserFeed from "./UserFeed/UserFeed";

// TODO: ДОБАВИТЬ РОУТЫ ДЛЯ ДРУГИХ ТАБОВ

const Profile = () => {
  console.log(styles);
  return (
    <div className="profile-content">
      <UserMainInfo />
      <Routes>
        <Route path="/posts" element={<UserFeed />} />
        <Route path="/about" element={<UserAbout />} />
      </Routes>
    </div>
  );
};

export default Profile;
