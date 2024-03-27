import React from "react";
import { useTask } from "../context/TaskContext";

function TaskCard({ task }) {
  const { deleteTask } = useTask();

  return (
    <div>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <span>{task.done == 1 ? "✅" : "❌"}</span>
      <span>{task.createAT}</span>
      <button>Edit</button>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
}

export default TaskCard;
