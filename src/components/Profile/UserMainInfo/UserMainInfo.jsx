import UserBanner from "./UserBanner/UserBanner";
import UserTabs from "./UserTabs/UserTabs";
import PropTypes from "prop-types";

function UserMainInfo(props) {
  UserMainInfo.propTypes = {
    profilePage: PropTypes.object,
  };

  return (
    <div className="user-main-info">
      <UserBanner />
      <UserTabs profilePage={props.profilePage} />
    </div>
  );
}

export default UserMainInfo;
