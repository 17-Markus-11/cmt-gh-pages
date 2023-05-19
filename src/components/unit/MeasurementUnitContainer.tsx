import { connect } from "react-redux";
import { AppStore } from "../../store/redusers/redux-store";
import { createMeasurementUnit, deleteMeasurementUnit, editMeasurementUnit, getMeasurementUnits } from "../../store/actions/unit-actions";
import Table from "../common/table/Table";
import style from './MeasurementUnit.module.css';
import { MeasurementUnitInfo } from "../../store/types/unit/MeasurementUnitInfo";
import { MeasurementUnitRequest } from "../../store/types/unit/MeasurementUnitRequest";

const mapState = (store: AppStore) => {
    return ({
        modifiedContainerStyle: style.modifiedContainer,
        items: store.measurementUnitsData.measurementUnits,
        defaultItem: { id: 0, name: "", code: "" } as MeasurementUnitInfo,
        itemConfig: {id: style.measurementUnitId, name: style.measurementUnitName, code: style.measurementUnitCode},
        panelConfig: {id: style.measurementUnitId, name: style.measurementUnitNameInput, code: style.measurementUnitCodeInput}
    });
}

const mapActions ={
    createItem: createMeasurementUnit,
    getItems: getMeasurementUnits,
    editItem: editMeasurementUnit,
    deleteItem: deleteMeasurementUnit
};

class MeasurementUnitContainer extends Table<MeasurementUnitInfo, MeasurementUnitRequest> {}
export default connect(mapState, mapActions)(MeasurementUnitContainer);