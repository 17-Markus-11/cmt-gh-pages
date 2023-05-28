import { connect } from "react-redux";
import { AppStore } from "../../store/redusers/redux-store";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import Structure from "./Structure";
import { getStructure } from "../../store/actions/project-actions";

export interface StructureItemInfo {
    id: number,
    title: number,
    name: string,
    mark: string,
    code: string,
    type : string,
    date: string
}

const mapState = (store: AppStore) => {
    return ({
        items: store.projectsData.structure
    });
}

export default compose<React.ComponentType>(
    connect(mapState, {getStructure}),
    withRouter
)(Structure);