import { rerenderEntireTree } from "../render";

const state = {
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
      { id: 2, text: "I swimming in the sea", likesCount: 2, commentsCount: 4 },
      { id: 3, text: "Today i sleeping", likesCount: 1, commentsCount: 0 },
    ],
    postText: "",
  },
};

export default state;

export function addPost(enteredText) {
  state.profilePage.posts.push({
    id: 5,
    text: enteredText,
    likesCount: 0,
    commentCount: 0,
  });

  state.profilePage.postText = "";
  rerenderEntireTree(state);
}

export function updatePostText(enteredText) {
  state.profilePage.postText = enteredText;

  rerenderEntireTree(state);
}
