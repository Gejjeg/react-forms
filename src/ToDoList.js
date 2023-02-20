import React from "react";

export class TodoList extends React.Component {
    state = {
        todo: "1"
    }

     todo = (event) => {
        const listItems = document.getElementById(event.target.name);
        const list = document.createElement('li')
        listItems.appendChild(list).innerHTML = this.state.todo;
        
    }

    todoInput = (event) => {
        this.setState({
            todo: event.target.value
        })
    }

    render() {
        return (
            <div className="parentContainer">
                <div className="container">
                <input value={this.state.todo} onChange={this.todoInput}/>
                <div className="buttonContainer">
                    <div>
                        <h1>Today</h1>
                        <button name="forToday" className="button1" onClick={this.todo}>Add</button>
                        <ul id="forToday"></ul>
                    </div>
                    <div>
                        <h1>Tomorrow</h1>
                        <button name="forTomorrow" className="button2" onClick={this.todo}>Add</button>
                        <ul id="forTomorrow"></ul>
                    </div>
                    <div>
                        <h1>Next day</h1>
                        <button name="forNextDay" className="button3" onClick={this.todo}>Add</button>
                        <ul id="forNextDay"></ul>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}