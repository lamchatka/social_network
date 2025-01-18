import "./index.css";
import state from "./redux/state.js";
import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {addPost, updatePostText, subscribe} from "./redux/state.js";


const root = createRoot(document.getElementById("root"));

export function rerenderEntireTree(state) {
    root.render(
        <StrictMode>
            <App state={state} addPost={addPost} updatePostText={updatePostText}/>
        </StrictMode>
    );
}

// initial render
rerenderEntireTree(state);

subscribe(rerenderEntireTree);
