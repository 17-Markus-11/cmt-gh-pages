import { connect } from "react-redux";
import { AppStore } from "../../store/redusers/redux-store";
import { createProject, deleteProject, editProject, getProjects } from "../../store/actions/project-actions";
import Projects from "./Projects";

const mapState = (store: AppStore) => {
    return ({
        items: store.projectsData.projects
    });
}

export default connect(mapState, {createProject, getProjects, editProject, deleteProject})(Projects);
