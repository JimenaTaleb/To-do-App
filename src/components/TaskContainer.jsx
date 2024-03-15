import Task from "./Task";

export default function TaskContainer({ tasks, setTasks, filteredTasks, setFilteredTasks }) {
  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter((t) => t.id !== taskId);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    setFilteredTasks(updatedTasks)
  };

  return (
    <div>
      {filteredTasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          tasks={tasks}
          setTasks={setTasks}
          handleDeleteTask={handleDeleteTask}
        />
      ))}
    </div>
  );
}


