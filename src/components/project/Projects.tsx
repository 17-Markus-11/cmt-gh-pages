import { ButtonHTMLAttributes, Component, FormEvent, ReactNode } from "react";
import style from './Project.module.css';
import { ProjectRequest } from "../../store/types/project/ProjectRequest";
import { ProjectInfo } from "../../store/types/project/ProjectInfo";
import { NavLink } from "react-router-dom";
import { HiPlus } from "react-icons/hi";

type Props = {
    items: Array<ProjectInfo>,
    createProject: (unitPrice: ProjectRequest) => void,
    getProjects: (skip: number, take: number) => void,
    editProject: (id: number, unitPrice: ProjectRequest) => void,
    deleteProject: (id: number) => void,
}

class Projects extends Component<Props> {
    state = {
        isAddingNewProject: false
    };

    componentDidMount(): void {
        this.props.getProjects(0, 10);
    }

    onNewProjectCreating = (): void => {
        this.setState({
            isAddingNewProject: true
        });
    }

    onNewProjectSubmit = (data: ProjectRequest) => {
        this.props.createProject(data);
        
        this.setState({
            isAddingNewProject: false
        });
    }

    render(): ReactNode {
        return (
            <div className={style.projectsContainer}>
                {
                    this.state.isAddingNewProject && 
                        <CreateNewProject onSubmit={this.onNewProjectSubmit} />
                }
                {
                    !this.state.isAddingNewProject && 
                        this.props.items.map(item => <ProjectDetails key={item.id} item={item} />)
                }
                {
                    !this.state.isAddingNewProject && 
                        <NewProject onClick={this.onNewProjectCreating} />
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
                        <div className={style.projectDescription}>{this.props.item.description}</div>
                        <div className={style.projectInfo}>
                            <div className={style.projectStatus}>Активный</div>
                            <div className={style.projectDate}>{this.props.item.createdDate}</div>
                        </div>
                    </div>
                </NavLink>
            </div>
        )
    }
}

type Props2 = {
    onClick: () => void
}

class NewProject extends Component<Props2> {
    render(): ReactNode {
        return (
            <div className={style.projectContainer} onClick={this.props.onClick}>
                <HiPlus className={style.newProject} />
            </div>
        );
    }
}

type Props3 = {
    onSubmit: (data: ProjectRequest) => void
}

class CreateNewProject extends Component<Props3> {
    state = {
        name: "",
        description: ""
    };

    onNameChange = (event: FormEvent<HTMLInputElement>) => 
        this.setState({name: event.currentTarget.value});

    onDescriptionChange = (event: FormEvent<HTMLTextAreaElement>) => 
        this.setState({description: event.currentTarget.value});

    onSubmit = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault();

        var request : ProjectRequest = {
            name: this.state.name,
            description: this.state.description
        }

        this.setState({
            name: "",
            description: ""
        });

        this.props.onSubmit(request);
    }

    render(): ReactNode {
        return (
            <form className={style.createProject}>
                <input type={"text"} placeholder="Название" value={this.state.name} onChange={this.onNameChange} />
                <textarea placeholder="Описание" value={this.state.description} onChange={this.onDescriptionChange} />
                <button onClick={this.onSubmit}>Создать</button>
            </form>
        );
    }
}


export default Projects;