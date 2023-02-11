import React from "react";

export class Welcome extends React.Component {
    //  static defaultProps = { 
    //     name: "Peter"
    // }
    
    render() {
        return (
            <div>
                <h1>Hello, {this.props.name}</h1>
            </div>
        )
    }
}

// Welcome.defaultProps = {
//     name: "Guest"
// }