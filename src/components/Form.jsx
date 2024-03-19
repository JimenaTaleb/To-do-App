import { useState } from "react";

export default function Form({ addTask }) {
  const [task, setTask] = useState({
    title: "",
  });

  function handleAddTask(e) {
    e.preventDefault();
    const taskId = crypto.randomUUID();

    const newTask = {
      id: taskId,
      title: task.title,
    };

    addTask(newTask);

    setTask({ title: "" });
  }

  return (
    <form onSubmit={handleAddTask}>
      <input
        type="text"
        value={task.title}
        placeholder="Ingresá una tarea"
        onChange={(e) => setTask({ ...task, title: e.target.value })}
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

