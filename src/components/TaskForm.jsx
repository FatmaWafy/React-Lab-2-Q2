/* eslint-disable */
import React, { useState } from "react";

const TaskForm = ({ addTask }) => {
  const [taskName, setTaskName] = useState("");

  const handleAddTask = () => {
    if (taskName.trim() !== "") {
      addTask(taskName);
      setTaskName("");
    }
  };

  return (
    <div>
      <input
        type='text'
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        className='form-control mb-3 '
        placeholder='Write task'
        style={{ borderRadius: "50px" }}
      />
      <button
        className='btn btn-primary  w-100'
        onClick={handleAddTask}
        style={{ borderRadius: "50px" }}
      >
        Add Task
      </button>
    </div>
  );
};

export default TaskForm;
