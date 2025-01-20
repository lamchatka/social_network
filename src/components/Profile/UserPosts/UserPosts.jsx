import styles from "./UserPosts.module.css";
import PropTypes from "prop-types";
import Post from "./Post/Post";
import React from "react";
import { addPostActionCreator } from "../../../redux/state";
import { updateNewPostTextActionCreator } from "../../../redux/state";

function UserPosts(props) {
  UserPosts.propTypes = {
    posts: PropTypes.array,
    dispatch: PropTypes.func,
    postText: PropTypes.string,
  };

  const newPostElement = React.createRef();

  const addNewPost = () => {
    let action = addPostActionCreator();
    props.dispatch(action);
  };

  const updateNewPostText = () => {
    let enteredText = newPostElement.current.value;
    let action = updateNewPostTextActionCreator(enteredText);
    props.dispatch(action);
  };

  console.log(props.postText);

  return (
    <div>
      <div className={styles["add-new-post"]}>
        <input
          ref={newPostElement}
          type="text"
          onChange={updateNewPostText}
          value={props.postText}
        />
        <button onClick={addNewPost}>Add</button>
      </div>
      <div className={styles["posts"]}>
        {props.posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
}

export default UserPosts;
