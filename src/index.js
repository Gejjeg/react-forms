import { createRoot } from "react-dom/client";
import { App } from "./App";
// import "./TodoList.css"

const root = createRoot(document.querySelector("#root"));

root.render(<App />);