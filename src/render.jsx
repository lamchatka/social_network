import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { addPost, updatePostText } from "./redux/state.js";

const root = createRoot(document.getElementById("root"));

export function rerenderEntireTree(state) {
  root.render(
    <StrictMode>
      <App state={state} addPost={addPost} updatePostText={updatePostText} />
    </StrictMode>
  );
}
