import PropTypes from "prop-types";
import styles from "./Post.module.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ShareIcon from "@mui/icons-material/Share";

function Post(props) {
  Post.propTypes = {
    post: PropTypes.object,
  };

  // TODO: выравнить блок info-text
  return (
    <div>
      <div className={styles["post"]}>
        <div className={styles["info"]}>
          <div className={styles["avatar"]}>
            <a href="#user">
              <img
                src="https://www.radiustheme.com/demo/wordpress/themes/cirkle/wp-content/uploads/avatars/1/60af1abf02c8c-bpfull.jpg"
                alt="Profile picture"
              />
            </a>
          </div>
          <div className={styles["info-text"]}>
            <div className={styles["fullname"]}>
              <a href="#user">
                <span>Rebeca Powel</span>
              </a>
              <div className={styles["published-date"]}> 21 янв 2025</div>
            </div>
          </div>
        </div>
        <div className={styles["text"]}>{props.post.text}</div>
        <div className={styles["separating-line"]}></div>
        <div className={styles["feedback"]}>
          <div className={styles["reactions"]}>
            <FavoriteBorderIcon sx={{ fontSize: 24, cursor: "pointer" }} />
            <span>{props.post.likesCount}</span>
          </div>
          <div className={styles["comments"]}>
            <ChatBubbleOutlineIcon sx={{ fontSize: 24, cursor: "pointer" }} />
            <span>{props.post.commentsCount}</span>
          </div>
          <div className={styles["share"]}>
            <ShareIcon sx={{ fontSize: 24, cursor: "pointer" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
