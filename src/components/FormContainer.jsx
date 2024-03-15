import Form from "./Form"
import Filters from "./Filters"

export default function FormContainer({ tasks, setTasks, setFilteredTasks }) {
  function addTask(newTask) {
    setTasks([...tasks, newTask]);
    localStorage.setItem("tasks", JSON.stringify([...tasks, newTask]));
  }

  return (
    <div>
      <Form addTask={addTask} />
      <Filters tasks={tasks} setFilteredTasks={setFilteredTasks} />
    </div>
  );
}

