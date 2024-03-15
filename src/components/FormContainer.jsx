import Form from "./Form"
import Filters from "./Filters"

export default function FormContainer({ tasks, setTasks }) {
  function addTask(newTask) {
    setTasks([...tasks, newTask]);
    localStorage.setItem("tasks", JSON.stringify([...tasks, newTask]));
  }

  return (
    <div>
      <Form addTask={addTask} />
      <Filters />
    </div>
  );
}

