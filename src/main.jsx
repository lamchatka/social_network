import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { store } from "./redux/state.js";
import { BrowserRouter } from "react-router-dom";

window.state = store.getState();

const root = createRoot(document.getElementById("root"));

// ЕСЛИ МЫ ПРОКИДЫВАЕМ ЧЕРЕЗ ПРОПСЫ ФУНКЦИЮ, ТО ЭТО CALLBACK-ФУНКЦИЯ

export function rerenderEntireTree(state) {
  root.render(
    <BrowserRouter>
      <StrictMode>
        <App state={state} dispatch={store.dispatch.bind(store)} />
      </StrictMode>
    </BrowserRouter>
  );
}

// initial render
rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);
