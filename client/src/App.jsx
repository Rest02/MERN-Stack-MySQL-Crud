import React from "react";
import { Route, Routes } from "react-router-dom";
import TaskPage from "./pages/TaskPage";
import TaskForm from "./pages/TaskForm";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<TaskPage />} />
      <Route path="/new" element={<TaskForm />} />
      <Route path="*" element={<NotFound/>} />
    </Routes>
  );
}

export default App;
