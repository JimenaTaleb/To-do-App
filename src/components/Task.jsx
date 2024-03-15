export default function Task({ task, tasks, setTasks }) {
  
  const handleDelete = () => {
    const updatedTasks = tasks.filter((t) => t.id !== task.id);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  return (
    <div>
      <p>{task.title}</p>
      <button onClick={handleDelete}>Eliminar</button>
    </div>
  );
}
