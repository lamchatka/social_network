import styles from "./Profile.module.css";
import UserMainInfo from "./UserMainInfo/UserMainInfo";
import UserPosts from "./UserPosts/UserPosts";
import UserAbout from "./UserAbout/UserAbout";
import { Routes, Route } from "react-router-dom";

// TODO: ДОБАВИТЬ РОУТЫ ДЛЯ ДРУГИХ ТАБОВ

const Profile = () => {
  console.log(styles);
  return (
    <div className="profile-content">
      <UserMainInfo />
      <Routes>
        <Route path="/posts" element={<UserPosts />} />
        <Route path="/about" element={<UserAbout />} />
      </Routes>
      <div>my friends list</div>
    </div>
  );
};

export default Profile;
