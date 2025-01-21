// Вынесли actionType в константы
const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const profilePageReducer = (state, action) => {
  switch (action.type) {
    case ADD_POST:
      state.posts.push({
        id: 5,
        text: state.postText,
        likesCount: 0,
        commentCount: 0,
      });
      state.postText = "";
      return state;
    case UPDATE_NEW_POST_TEXT:
      state.postText = action.text;
      return state;
    default:
      return state;
  }
};

// Создал два action creator для создания action для добавления поста и изменения текста в input
export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (enteredText) => ({
  type: UPDATE_NEW_POST_TEXT,
  text: enteredText,
});

export default profilePageReducer;
