import profilePageReducer from "./profilePageReducer";

export const store = {
  _state: {
    profilePage: {
      tabNamesList: [
        { tabName: "Posts", path: "/posts" },
        { tabName: "About", path: "/about" },
        { tabName: "Friends", path: "/friends" },
        { tabName: "Groups", path: "/groups" },
        { tabName: "Photos", path: "/pho" },
        { tabName: "Videos", path: "/videos" },
        { tabName: "Badges", path: "/badges" },
        { tabName: "Forums", path: "/forums" },
      ],
      posts: [
        { id: 1, text: "I am good guy", likesCount: 3, commentsCount: 0 },
        {
          id: 2,
          text: "I swimming in the sea",
          likesCount: 2,
          commentsCount: 4,
        },
        { id: 3, text: "Today i sleeping", likesCount: 1, commentsCount: 0 },
      ],
      postText: "",
    },
  },

  _callSubscriber() {},

  getState() {
    return this._state;
  },

  subscribe(subscriber) {
    this._callSubscriber = subscriber;
  },

  // DISPATCH - МЕТОД,В КОТОРЫЙ МЫ УПАКОВЫВАЕМ ВСЕ НУЖНЫЕ НАМ В КОМПОНЕНТАХ МЕТОДЫ. ACTION - ОБЪЕКТ С ОБЯЗАТЕЛЬНЫМ СВОЙСТВОМ TYPE. {type: "ADD-POST"}
  dispatch(action) {
    profilePageReducer(this._state.profilePage, action);
    this._callSubscriber(this._state);
  },
};
