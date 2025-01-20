import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./components/Profile/Profile";
import PropTypes from "prop-types";

const App = (props) => {
  App.propTypes = {
    state: PropTypes.object,
    dispatch: PropTypes.func,
  };

  return (
    <div className="app-wrapper">
      <Header />
      <Sidebar />
      <div className="content-wrapper">
        <div className="container">
          <Profile
            profilePage={props.state.profilePage}
            dispatch={props.dispatch}
          />
        </div>
      </div>
    </div>
  );
};

export default App;

// ctrl+ a,  ctrl + k + f - highlight ct and format
// alt + shift + arrow down - paste below
