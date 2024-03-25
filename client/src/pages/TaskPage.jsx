import React, { useEffect, useState } from "react";
import { getTaskRequest } from "../api/task.api";
import TaskCard from '../components/TaskCard'

function TaskPage() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function loadTask() {
      const response = await getTaskRequest();
      setTasks(response.data);
    }
    loadTask();
  }, []);

  return (
    <div>
      <h1>Tasks</h1>

      {tasks.map((task) => (
        <TaskCard task={task} key={task.id}/>
      ))}
    </div>
  );
}

export default TaskPage;
