import React,{useState, useRef} from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { Task } from "../interfaces/Task";


interface Props{
    addNewTask : (task:Task) => void
}

const initialstate = {
    title: "",
    description: ""
}

const TaskForm = ({addNewTask}:Props) => {
    const [task, setTask] = useState(initialstate)

    const handleChange = (e: any) => {
        console.log(e.target.value)
        setTask({...task, [e.target.name]:e.target.value})
    }
    const handleSubmit = (e: any) => {
        e.preventDefault();
        addNewTask(task)
        setTask(initialstate)
    }

  return (
    <div className="card card-body bg-secondary text-dark">
      <h1>add Task</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Escribe un titulo"
          name="title"
          value={task.title}
          className="form-control mb-3"
          autoFocus
          onChange={handleChange}
        ></input>
        <textarea
          name="description"
          value={task.description}
          cols={40}
          rows={2}
          placeholder="Descripcion"
          className="form-control mb-3 "
          onChange={handleChange}
        ></textarea>
        <button className="btn btn-success">

          Save <AiOutlinePlus />
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
