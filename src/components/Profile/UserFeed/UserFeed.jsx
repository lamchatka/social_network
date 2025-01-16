import styles from "./UserFeed.module.css";
import MainContent from "./MainContent/MainContent";
import InfoSidebar from "./InfoSidebar/InfoSidebar";
import PropTypes from "prop-types";

function UserFeed(props) {
  UserFeed.propTypes = {
    posts: PropTypes.array,
  };

  return (
    <div className={styles["myFeed"]}>
      {/* TODO: или здесь должны быть роуты для табов */}
      <MainContent posts={props.posts} />
      <InfoSidebar />
    </div>
  );
}

export default UserFeed;
