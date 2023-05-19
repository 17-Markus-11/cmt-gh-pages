import { connect } from "react-redux";
import { AppStore } from "../../store/redusers/redux-store";
import { createProject, deleteProject, editProject, getProjects } from "../../store/actions/project-actions";
import Project from "./Project";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { ProjectInfo } from "../../store/types/project/ProjectInfo";
import { switchToModule } from "../../store/actions/menu-actions";

const project: ProjectInfo = {
    id: 1,
    name: "Project Zomboid"
}

const mapState = (store: AppStore) => {
    return ({
        item: project
    });
}

const getProjectById = (id: number) => {}

export default compose<React.ComponentType>(
    connect(mapState, {getProjectById, switchToModule}),
    withRouter
)(Project);
