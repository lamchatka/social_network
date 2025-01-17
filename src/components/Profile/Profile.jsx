import styles from "./Profile.module.css";
import UserMainInfo from "./UserMainInfo/UserMainInfo";
import UserAbout from "./UserAbout/UserAbout";
import { Routes, Route } from "react-router-dom";
import UserFeed from "./UserFeed/UserFeed";
import PropTypes from "prop-types";

// TODO: ДОБАВИТЬ РОУТЫ ДЛЯ ДРУГИХ ТАБОВ

const Profile = (props) => {
  Profile.propTypes = {
    profilePage: PropTypes.object,
    addPost: PropTypes.func,
    updatePostText: PropTypes.func,
  };

  return (
    <div className={styles["profile-content"]}>
      <UserMainInfo profilePage={props.profilePage} />
      <Routes>
        <Route
          path="/posts"
          element={
            <UserFeed
              posts={props.profilePage.posts}
              postText={props.profilePage.postText}
              addPost={props.addPost}
              updatePostText={props.updatePostText}
            />
          }
        />
        <Route path="/about" element={<UserAbout />} />
      </Routes>
    </div>
  );
};

export default Profile;
