import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { store } from "./redux/state.js";

window.state = store.getState();

const root = createRoot(document.getElementById("root"));

export function rerenderEntireTree(state) {
  root.render(
    <StrictMode>
      <App
        state={state}
        addPost={store.addPost}
        updatePostText={store.updatePostText}
      />
    </StrictMode>
  );
}

// initial render
rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);
