import styles from "./UserFeed.module.css";
import MainContent from "./MainContent/MainContent";
import InfoSidebar from "./InfoSidebar/InfoSidebar";
import PropTypes from "prop-types";

function UserFeed(props) {
  UserFeed.propTypes = {
    posts: PropTypes.array,
    addPost: PropTypes.func,
    updatePostText: PropTypes.func,
    postText: PropTypes.string,
  };

  return (
    <div className={styles["myFeed"]}>
      {/* TODO: или здесь должны быть роуты для табов */}
      <MainContent
        posts={props.posts}
        postText={props.postText}
        addPost={props.addPost}
        updatePostText={props.updatePostText}
      />
      <InfoSidebar />
    </div>
  );
}

export default UserFeed;
