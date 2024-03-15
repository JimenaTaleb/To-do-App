import Task from "./Task"

export default function TaskContainer({ tasks, setTasks }) {
  return (
    <div>
      {tasks.map((task) => (
        <Task key={task.id} task={task} tasks={tasks} setTasks={setTasks} />
      ))}
    </div>
  );
}
