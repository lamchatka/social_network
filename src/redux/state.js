// Вынесли actionType в константы
const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

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
    if (action.type === ADD_POST) {
      this._state.profilePage.posts.push({
        id: 5,
        text: this._state.profilePage.postText,
        likesCount: 0,
        commentCount: 0,
      });

      this._state.profilePage.postText = "";
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.postText = action.text;
      this._callSubscriber(this._state);
    }
  },
};

// Создал два action creator для создания action для добавления поста и изменения текста в input
export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (enteredText) => ({
  type: UPDATE_NEW_POST_TEXT,
  text: enteredText,
});
