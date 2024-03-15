import React from "react";

export default function Task({ task, tasks, setTasks, handleDeleteTask }) {
  
  const handleDelete = () => {
    handleDeleteTask(task.id);
  };

  const handleCheckboxChange = () => {
    const updatedTasks = tasks.map((t) =>
      t.id === task.id ? { ...t, completed: !t.completed } : t
    );
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  return (
    <div>
      <p>{task.title}</p>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={handleCheckboxChange}
      />
      <button onClick={handleDelete}>Eliminar</button>
    </div>
  );
}

