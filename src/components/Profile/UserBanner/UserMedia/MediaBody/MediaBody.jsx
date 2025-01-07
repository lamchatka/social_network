import classes from "./MediaBody.module.css";

function MediaBody() {
  return (
    <div className={classes["media-body"]}>
      <h3 className={classes["user-title"]}>Rebeca Powel</h3>
      <div className={classes["item-subtitle"]}>
        United State of America California, United States (US).
      </div>
      <ul className={classes["item-social"]}>
        <li>
          <a href="#vk">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/VK_Compact_Logo_%282021-present%29.svg/2048px-VK_Compact_Logo_%282021-present%29.svg.png"
              alt="vk"
            />
          </a>
        </li>
        <li>
          <a href="#tg">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Telegram_2019_Logo.svg/512px-Telegram_2019_Logo.svg.png"
              alt=""
            />
          </a>
        </li>
        <li>
          <a href="#inst">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1000px-Instagram_logo_2022.svg.png"
              alt=""
            />
          </a>
        </li>
        <li>
          <a href="#email">
            <img
              src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/112-gmail_email_mail-512.png"
              alt=""
            />
          </a>
        </li>
      </ul>
      <ul className={classes["user-meta"]}>
        <li>
          <a href="">Posts</a>
        </li>
        <li>
          <a href="">Likes</a>
        </li>
        <li>
          <a href="">Comments</a>
        </li>
      </ul>
    </div>
  );
}

export default MediaBody;
