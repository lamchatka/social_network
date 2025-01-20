import styles from "./UserPosts.module.css";
import PropTypes from "prop-types";
import Post from "./Post/Post";
import AddNewPost from "./AddNewPost/AddNewPost";

function UserPosts(props) {
  UserPosts.propTypes = {
    posts: PropTypes.array,
    dispatch: PropTypes.func,
    postText: PropTypes.string,
  };

  return (
    <div>
      <AddNewPost dispatch={props.dispatch} postText={props.postText} />
      <div className={styles["posts"]}>
        {props.posts.map((p) => (
          <Post key={p.text} post={p} />
        ))}
      </div>
    </div>
  );
}

export default UserPosts;
