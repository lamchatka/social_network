import UserBanner from "./UserBanner/UserBanner";
import UserTabs from "./UserTabs/UserTabs";

function UserMainInfo() {
    return (
        <div className="user-main-info">
        <UserBanner />
        <UserTabs />
      </div>
    );
}

export default UserMainInfo;