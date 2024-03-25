import React, { useEffect, useState } from "react";
import { getTaskRequest } from "../api/task.api";
import TaskCard from "../components/TaskCard";

function TaskPage() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function loadTask() {
      const response = await getTaskRequest();
      setTasks(response.data);
    }
    loadTask();
  }, []);

  function renderMain() {
    if (tasks.length == 0) {
      return <h1>No hay tareas creadas aún</h1>;
    } else {
      return tasks.map((task) => <TaskCard task={task} key={task.id} />);
    }
  }
  return (
    <div>
      <h1>Tasks</h1>
      {renderMain()}
    </div>
  );
}

export default TaskPage;
