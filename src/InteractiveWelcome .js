import React from "react";
import { Welcome } from "./Welcome";

export class InteractiveWelcome  extends React.Component {
    state = {
        name: ""
    }

    inputChange = (event) => {
        this.setState({
            name: event.target.value,
        })
    }
    render() {
        return (
            <div>
                {this.state.name.length > 0 && <Welcome name={this.state.name}/>}
                <input value={this.state.name} name="name" onChange={this.inputChange}></input>
            </div>
        )
    }
}