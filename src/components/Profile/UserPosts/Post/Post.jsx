import PropTypes from "prop-types";
import styles from "./Post.module.css";

function Post(props) {
  Post.propTypes = {
    post: PropTypes.object,
  };

  return (
    <div>
      <div className={styles["post"]}>
        <div>{props.post.text}</div>
        <div>Likes: {props.post.likesCount}</div>
        <div>Comment: {props.post.commentsCount}</div>
      </div>
    </div>
  );
}

export default Post;
