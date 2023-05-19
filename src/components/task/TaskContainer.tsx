import { connect } from "react-redux";
import { AppStore } from "../../store/redusers/redux-store";
import Table from "../common/table/Table";
import style from './Task.module.css';
import TasksPanel from "./TasksPanel";

export interface TaskInfo {
    id: number,
    name: string,
    description: string,
    module: string,
    startDate: string,
    deadline: string,
    status: string
}

const tasks: TaskInfo[] = [
    {
        id: 1,
        name: "Task1",
        description: "Some description Some description ",
        module: "UnitPrice",
        startDate: "16.05.2022",
        deadline: "2 days",
        status: "In progress"
    },
    {
        id: 2,
        name: "Task2",
        description: "Some description2",
        module: "Workers",
        startDate: "17.05.2022",
        deadline: "2 weeks",
        status: "Planned"
    }
];

const mapState = (store: AppStore) => {
    return ({
        items: tasks
    });
}

export default connect(mapState, {})(TasksPanel);
