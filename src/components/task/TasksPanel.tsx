import { Component, ReactNode } from "react";
import style from './Task.module.css';
import Localization from "../../utils/localization/localization";
import { TaskInfo } from "./TaskContainer";
import Task from "./Task";

type Props = {
    items: TaskInfo[]
}

class TasksPanel extends Component<Props> {
    localization = Localization.getLocalization("tasks");

    render(): ReactNode  {
        return (
            <div className={style.tasksPanel}>
                <div className={style.tasksContainer}>
                    <div className={style.header}>
                        <b>{this.localization("header")}</b>
                    </div>
                    {
                        this.props.items.map(item => <Task key={item.id} item={item} />)
                    }
                </div>
            </div>
        );
    }
}

export default TasksPanel;