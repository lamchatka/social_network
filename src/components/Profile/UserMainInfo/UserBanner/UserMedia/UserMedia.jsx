import classes from "./UserMedia.module.css";
import Avatar from "./Avatar/Avatar";
import MediaBody from "./MediaBody/MediaBody";

function UserMedia() {
  return (
    <div className={classes["media"]}>
      <Avatar />
      <MediaBody />
    </div>
  );
}

export default UserMedia;
