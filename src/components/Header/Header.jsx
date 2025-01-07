import classes from "./Header.module.css";
import SearchIcon from "@mui/icons-material/Search";

const Header = () => {
  return (
    <header className={classes["fixed-header"]}>
      <div className={classes["navbar"]}>
        <div className={classes["navbar-item-logo"]}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQltIAHUYT6u7GKhj-UIX_fU1Pf0sySCFH_aw&s"
            alt="logo"
          />
        </div>
        <div className={classes["nav-item-header-control"]}>
          <div className={classes["input-group"]}>
            <input type="text" placeholder="Search here..." />
            <div className={classes["input-group-search-btn"]}>
              <button type="submit">
                <SearchIcon
                  sx={{
                    color: "#ffffff",
                    fontSize: "24px",
                  }}
                />
              </button>
            </div>
          </div>
          <div className={classes["header2-login"]}>
            <a href="#login">Login</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
