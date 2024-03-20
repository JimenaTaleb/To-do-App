import { useState } from "react";
import { Box } from "@mui/material";

export default function Task({ task, tasks, setTasks, handleDeleteTask }) {
  const [completed, setCompleted] = useState(task.completed || false);

  const handleDelete = () => {
    handleDeleteTask(task.id);
  };

  const handleCheckboxChange = () => {
    const updatedTasks = tasks.map((t) =>
      t.id === task.id ? { ...t, completed: !completed } : t
    );
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    setCompleted(!completed);
  };

  return (
    <div>
      <Box display="flex" flexDirection="row">
        <p>{task.title}</p>
        <input
          type="checkbox"
          checked={completed}
          onChange={handleCheckboxChange}
        />
        <button onClick={handleDelete}>Eliminar</button>
      </Box>
    </div>
  );
}
