import React from "react";
import { Task } from "../interfaces/Task";
import TaskCard from "./TaskCard";

interface Props {
  tasks: Task[];
  deleteTask: (id?:number) => void; 
}
const TaskList = ({ tasks,deleteTask }: Props) => {
  return (
    <>
      {tasks.map((task) => (
        <div className="col-md-3 p-3" key={task.id}>
          <TaskCard task={task} deleteTask={deleteTask}></TaskCard>
        </div>
      ))}
    </>
  );
};

export default TaskList;
