import "./App.css";
import { useState } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [list, setList] = useState([]);

  const addTodo = (newTodo) => {
    setList([...list, newTodo]);
  };

  const handleTodo = (filterTodo) => {
    const filtered = list.filter((item) => item !== filterTodo);
    setList(filtered);
  };

  return (
    <div className="App">
      <Form addTodo={addTodo} />
      <TodoList list={list} handleTodo={handleTodo} />
    </div>
  );
}

export default App;
