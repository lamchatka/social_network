import styles from "./AddNewPost.module.css";
import React from "react";
import { addPostActionCreator } from "../../../../redux/state";
import { updateNewPostTextActionCreator } from "../../../../redux/state";
import PropTypes from "prop-types";

function AddNewPost(props) {
  AddNewPost.propTypes = {
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
    <div className={styles["add-new-post"]}>
      <input
        className={styles["add-new-post-input"]}
        ref={newPostElement}
        type="text"
        onChange={updateNewPostText}
        value={props.postText}
        placeholder="Что нового?"
      />
      <button className={styles["add-new-post-btn"]} onClick={addNewPost}><a href="#add-post">Добавить</a></button>
    </div>
  );
}

export default AddNewPost;
