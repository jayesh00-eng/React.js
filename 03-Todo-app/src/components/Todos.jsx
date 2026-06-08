import { useState } from "react";

const Todos = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  // Add Todo
  const addTodo = () => {
    if (todo.trim() === "") return;

    setTodos([...todos, todo]);
    setTodo("");
  };

  // Remove Last Todo
  const removeTodo = () => {
    const updatedTodos = [...todos];
    updatedTodos.pop();
    setTodos(updatedTodos);
  };

  return (
    <>
      <section className="container">
        <h1>Todo Manager</h1>

        <div className="mb-3 d-flex gap-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter a new todo"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />

          <button
            type="button"
            className="btn btn-primary"
            onClick={addTodo} >
            Add
          </button>

          <button
            type="button"
            className="btn btn-danger"
            onClick={removeTodo}
          >
            Remove
          </button>
        </div>

        <ul className="list-group">
          {todos.map((item, index) => (
            <li key={index} className="list-group-item">
              {item}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Todos;