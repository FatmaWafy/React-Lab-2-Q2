/* eslint-disable */
import "./App.css";
import React, { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskName) => {
    const newTask = {
      id: Date.now(),
      name: taskName,
      isDone: false,
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const markAsDone = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, isDone: !task.isDone } : task
      )
    );
  };

  return (
    <div className='container min-vh-100 d-flex justify-content-center align-items-center'>
      <div
        className='card w-50 p-4 bg-primary-subtle border-0'
        style={{ borderRadius: "50px" }}
      >
        <h1 className='text-center mb-4'>To Do App</h1>

        <div
          className='mb-4 p-4 bg-light shadow'
          style={{ borderRadius: "50px" }}
        >
          <TaskForm addTask={addTask} />
        </div>

        <div className='mt-4'>
          <TaskList
            tasks={tasks}
            markAsDone={markAsDone}
            deleteTask={deleteTask}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
