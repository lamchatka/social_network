import "./index.css";
import state from "./redux/state.js";

import { rerenderEntireTree } from "./render.jsx";


rerenderEntireTree(state);
