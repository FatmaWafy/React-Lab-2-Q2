/* eslint-disable */
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Task = ({ task, markAsDone, deleteTask }) => {
  return (
    <div className='card mb-2' style={{ borderRadius: "50px", padding: "0px" }}>
      <div className='card-body d-flex justify-content-between align-items-center'>
        <span
          style={{
            textDecoration: task.isDone ? "line-through" : "none",
            flex: 1,
          }}
        >
          {task.name}
        </span>
        <div>
          <button
            className='btn btn-success btn-sm mx-1'
            onClick={() => markAsDone(task.id)}
            style={{ borderRadius: "50px" }}
          >
            Mark as Done
          </button>
          <button
            className='btn btn-danger btn-sm'
            onClick={() => deleteTask(task.id)}
            style={{ borderRadius: "50px" }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Task;
