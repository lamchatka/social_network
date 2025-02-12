import styles from "./MainContent.module.css";
import UserPosts from "../../UserPosts/UserPosts";
import Filters from "./Filters/Filters";
import PropTypes from "prop-types";

function MainContent(props) {
  MainContent.propTypes = {
    posts: PropTypes.array,
    dispatch: PropTypes.func,
    postText: PropTypes.string,
  };

  return (
    <div className={styles["content"]}>
      <Filters />
      {/* TODO: здесь должны быть роуты для табов */}
      <UserPosts
        posts={props.posts}
        postText={props.postText}
        dispatch={props.dispatch}
      />
    </div>
  );
}

export default MainContent;
