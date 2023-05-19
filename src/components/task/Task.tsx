import { Component, ReactNode } from "react"
import style from './Task.module.css';
import { TaskInfo } from "./TaskContainer";

type Props = {
    item: TaskInfo
}

class Task extends Component<Props> {
    render(): ReactNode {
        const task = this.props.item;
        return (
            <div className={style.taskContainer}>
                <div className={style.taskName}>{task.name}</div>
                <div>{task.description}</div>
                <div>Module: {task.module}</div>
                <div>Status: {task.status}</div>
                <div>Start: {task.startDate}</div>
                <div>Deadline: {task.deadline}</div>
            </div>
        )
    }
}

export default Task;