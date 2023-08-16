import react, { useState } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [inputText , setInputText] = useState("");
  const [todos , setTodos] = useState([]);
  return (
    <>
    <div className="App">
      <h1 className="head">Abbas Todo List</h1>
      <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText}/>
      <TodoList setTodos={setTodos} todos={todos}/>
    </div>
    </>
  );
}

export default App;