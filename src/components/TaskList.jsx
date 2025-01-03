/* eslint-disable */
import React from "react";
import Task from "./Task";

const TaskList = ({ tasks, markAsDone, deleteTask }) => {
  return (
    <div>
      {tasks.length === 0 ? (
        <p className='text-center'>No tasks added yet.</p>
      ) : (
        tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            markAsDone={markAsDone}
            deleteTask={deleteTask}
          />
        ))
      )}
    </div>
  );
};

export default TaskList;
