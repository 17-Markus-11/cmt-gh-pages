import { Component, ReactNode } from "react";
import { ProjectInfo } from "../../store/types/project/ProjectInfo";
import { RouteComponentProps } from "react-router-dom";
import style from "./Project.module.css";

type Props = {
    item: ProjectInfo,
    getProjectById: (id: number) => void,
    uploadStructureFile: (id: number, file: File) => void,
    uploadSmtrFile: (id: number, file: File) => void,
    connectUpgToProject: (id: number) => void,
    switchToModule: (name: string, id: number | undefined) => void
}

type RouteParams = {
    id: string
}

class Project extends Component<Props & RouteComponentProps<RouteParams>> {
    state = {
        selectedStructureFile: null,
        selectedSmtrFile: null
    };

    projectId = Number(this.props.match.params.id);
    
    componentDidMount(): void {
        if (this.projectId) {
            this.props.getProjectById(this.projectId);
        }

        this.props.switchToModule("project", this.projectId);
    }

    onStructureFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (!event.target.files)
            return;

        const file = event.target.files[0];
        this.setState({
            selectedStructureFile: file
        })
    }

    onStructureFileSubmit = () => {
        if (!this.state.selectedStructureFile)
            return;

        this.props.uploadStructureFile(this.projectId, this.state.selectedStructureFile);

        this.setState({
            selectedStructureFile: null
        })
    }

    onSmtrFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (!event.target.files)
            return;

        const file = event.target.files[0];
        this.setState({
            selectedSmtrFile: file
        })
    }

    onSmtrFileSubmit = () => {
        if (!this.state.selectedSmtrFile)
            return;

        this.props.uploadSmtrFile(this.projectId, this.state.selectedSmtrFile);
        

        this.setState({
            selectedSmtrFile: null
        })
    }

    onUpgConnectSubmit = () => {
        this.props.connectUpgToProject(this.projectId);
    }

    render(): ReactNode {
        const project = this.props.item;
        
        return (
            <div className={style.projContainer}>
                <div className={style.projInfo}>
                    <h1>{project.name}</h1>
                    <span>{project.description}</span>
                </div>
                <div className={style.projUpload}>
                    {
                        !project.isStructureSetuped &&
                            <div className={style.projUploadContainer}>
                                <h3>Загрузить Структуру</h3>
                                <div className={style.projUploadFile}>
                                    <input type="file" id="file" onChange={this.onStructureFileChange} />
                                </div>
                                    <label htmlFor="file" className={style.projUploadFileLabel}>Выберите файл</label>
                                <div className={style.projUploadSubmit}>
                                    <button onClick={this.onStructureFileSubmit}>Загрузить</button>
                                </div>
                            </div>
                    }
                    {
                        !project.isSmtrSetuped &&
                            <div className={style.projUploadContainer}>
                                <h3>Загрузить ВМТР</h3>
                                <div className={style.projUploadFile}>
                                    <input type="file" id="file2" onChange={this.onSmtrFileChange} />
                                </div>
                                    <label htmlFor="file2" className={style.projUploadFileLabel}>Выберите файл</label>
                                <div className={style.projUploadSubmit}>
                                    <button onClick={this.onSmtrFileSubmit}>Загрузить</button>
                                </div>
                            </div>
                    }
                    {
                        !project.isUpgSetuped &&
                            <div className={style.projUploadContainer}>
                                <h3>Подключить справочник</h3>
                                <div className={style.projUpgSelect}>
                                    <select required>
                                        <option hidden value="">Выберите справочник:</option>
                                        <option value={1}>Cправочник компании.xlsx</option>
                                    </select>
                                </div>
                                <div className={style.projUploadSubmit}>
                                    <button onClick={this.onUpgConnectSubmit}>Подключить</button>
                                </div>
                            </div>
                    }
                </div>
                
               
            </div>
        )
    }
}

export default Project;