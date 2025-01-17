import styles from "./UserPosts.module.css";
import PropTypes from "prop-types";
import Post from "./Post/Post";
import React from "react";

function UserPosts(props) {
  UserPosts.propTypes = {
    posts: PropTypes.array,
    addPost: PropTypes.func,
    updatePostText: PropTypes.func,
    postText: PropTypes.string,
  };

  const newPostElement = React.createRef();

  // при вызове функции стейт меняется, но перерендера не происходит. Поэтому я не вижу новый пост
  const addNewPost = () => {
    let enteredText = newPostElement.current.value;
    props.addPost(enteredText);
  };

  const updatePostText = () => {
    let enteredText = newPostElement.current.value;
    props.updatePostText(enteredText);
    
  };

  console.log(props.postText);

  return (
    <div>
      <div className={styles["add-new-post"]}>
        <input ref={newPostElement} type="text" onChange={updatePostText} value={props.postText}/>
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
