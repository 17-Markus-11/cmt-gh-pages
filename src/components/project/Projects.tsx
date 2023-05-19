import { Component, ReactNode } from "react";
import style from './Project.module.css';
import { ProjectRequest } from "../../store/types/project/ProjectRequest";
import { ProjectInfo } from "../../store/types/project/ProjectInfo";
import { NavLink } from "react-router-dom";

type Props = {
    items: Array<ProjectInfo>,
    createProject: (unitPrice: ProjectRequest) => void,
    getProjects: (skip: number, take: number) => void,
    editProject: (id: number, unitPrice: ProjectRequest) => void,
    deleteProject: (id: number) => void,
}

class Projects extends Component<Props> {
    componentDidMount(): void{
        this.props.getProjects(0, 10);
    }

    render(): ReactNode {
        return (
            <div className={style.projectsContainer}>
                {
                    this.props.items.map(item => <ProjectDetails key={item.id} item={item} />)
                }
            </div>
        )
    }
}

type Props1 = {
    item: ProjectInfo
}

class ProjectDetails extends Component<Props1> {
    render(): ReactNode {
        return (
            <div className={style.link}>
                <NavLink to={`/projects/${this.props.item.id}`}>
                    <div className={style.projectContainer}>
                            <div className={style.projectName}>{this.props.item.name}</div>
                            <div className={style.projectDescription}>Some test description test description test description test description</div>
                            <div className={style.projectInfo}>
                                <div className={style.projectStatus}>Активный</div>
                                <div className={style.projectDate}>15.05.2023</div>
                            </div>
                    </div>
                </NavLink>
            </div>
        )
    }
}

export default Projects;