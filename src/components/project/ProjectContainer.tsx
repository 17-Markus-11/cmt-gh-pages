import { connect } from "react-redux";
import { AppStore } from "../../store/redusers/redux-store";
import { getProjectById, uploadStructureFile, uploadSmtrFile, connectUpgToProject } from "../../store/actions/project-actions";
import Project from "./Project";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { switchToModule } from "../../store/actions/menu-actions";

const mapState = (store: AppStore) => {
    return ({
        item: store.projectsData.activeProject
    });
}

export default compose<React.ComponentType>(
    connect(mapState, {getProjectById, uploadStructureFile, uploadSmtrFile, connectUpgToProject, switchToModule}),
    withRouter
)(Project);
