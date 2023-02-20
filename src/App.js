import React from "react";
import { InteractiveWelcome } from "./InteractiveWelcome ";
import { Login } from "./Login";
import { TodoList } from "./ToDoList";
import { UncontrolledLogin } from "./UncontrolledLogin ";

export class App extends React.Component {
    render() {
        return (
            <div>
                {/* <InteractiveWelcome /> */}
                <Login />
                {/* <UncontrolledLogin /> */}
                {/* <TodoList /> */}
            </div>
        )
    }
}