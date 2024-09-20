import { useRef, useState } from "react";

export const ToDo = () => {
  const [todos, setTodos] = useState([]);
  const todo = useRef("");
  const user = useRef("");

  function handleSubmit() {
    const newTodo = {
      id: Math.random(),
      text: todo.current.value,
      user: user.current.value,
    };

    setTodos([...todos, newTodo]);

    todo.current.value = "";
    user.current.value = "";
  }

  console.log(todos);

  return (
    <>
      <div className="form">
        <form action="#" onSubmit={handleSubmit}>
          <div className="todo-title">
            <label htmlFor="title">Enter the Title of To Do: </label>
            <input type="text" id="title" name="title" ref={todo} />
          </div>
          <div className="todo-user">
            <label htmlFor="user">Enter the User Name: </label>
            <input type="text" id="user" ref={user} name="user" />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="display">
        <h2>Displaying To Do List</h2>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              {todo.text} - {todo.user}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
