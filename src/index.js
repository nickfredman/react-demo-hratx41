import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todos: [], loading: true };
  }

  componentDidMount() {
    $.get("https://jsonplaceholder.typicode.com/todos", data => {
      // const topTenTodos = data.slice(0, 10);
      // console.log(topTenTodos);
      // const todosWithState = topTenTodos.map(todo => (todo.done = false));
      // console.log(todosWithState);
      this.setState({ todos: data.slice(0, 10) });
    });
  }

  handleClick(e) {
    console.log(e.target.id);
    const newState = !todos[e.target.id].completed;
    const newState = {}

    this.setState({todos[e.target.id].completed: newState })
  }

  render() {
    const finished = {
      textDecoration: "line-through"
    };

    return (
      <div>
        <h1>I'm so lonely without anything to complete</h1>
        {this.state.todos.map((todo, i) => (
          <p
            onClick={this.handleClick.bind(this)}
            id={todo.id}
            style={todo.completed ? finished : null}
          >
            {todo.title}
          </p>
        ))}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
