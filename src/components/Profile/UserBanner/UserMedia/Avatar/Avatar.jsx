import classes from "./Avatar.module.css";

function Avatar() {
  return (
    <div className={classes["item-img"]}>
      <a href="#tt">
        <img
          src="https://www.radiustheme.com/demo/wordpress/themes/cirkle/wp-content/uploads/avatars/1/60af1abf02c8c-bpfull.jpg"
          alt="Profile picture"
        />
      </a>
    </div>
  );
}

export default Avatar;
