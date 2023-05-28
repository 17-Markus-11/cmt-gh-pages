import { connect } from "react-redux";
import { AppStore } from "../../store/redusers/redux-store";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import Smtr from "./Smtr";
import { getSmtr } from "../../store/actions/project-actions";

export interface SmtrItemInfo {
    id: number,
    index: number,
    stage: string,
    title: number,
    titleName: string,
    brand: string,
    techSpecCode: string,
    revision : number,
    constructive: string,
    position: number,
    techName: string,
    docType: string,
    code: string,
    manufacturer: string,
    units: string,
    quantityInProject: number,
    mass: number,
    note: string,
    consumptionRate: number,
    consumptionQuantity: number,
    resourceType: string,
    delivery: string,
    pricePerUnit: number,
    cost: number,
    workCode: string,
    workName: string,
    workUnits: string,
    coeficient: number,
    quantity: number,
}

const mapState = (store: AppStore) => {
    return ({
        items: store.projectsData.smtr
    });
}

export default compose<React.ComponentType>(
    connect(mapState, {getSmtr}),
    withRouter
)(Smtr);