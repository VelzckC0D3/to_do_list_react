import InputTodo from "@/components/InputTodo";
import TodosList from "@/components/TodosList";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

const TodosLogic = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Setup development environment",
      completed: true,
    },
    {
      id: 2,
      title: "Develop website and add content",
      completed: false,
    },
    {
      id: 3,
      title: "Deploy to live server",
      completed: false,
    },
  ]);
  const delTodo = (id) => {
    setTodos([
      ...todos.filter((todo) => {
        return todo.id !== id;
      }),
    ]);
  };  
  const handleChange = (id) => {
    setTodos((prevState) =>
      prevState.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  };
  const addTodoItem = (title) => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };
  const setUpdate = (updatedTitle, id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.title = updatedTitle;
        }
        return todo;
      })
    );
  };
  
  
  return (
    <div>
      <InputTodo addTodoItem={addTodoItem} />
      <TodosList
        delTodo={delTodo}
        todosProps={todos}
        setUpdate={setUpdate}
        handleChange={handleChange}
      />
    </div>
  );
};

export default TodosLogic;
