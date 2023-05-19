import { FormAction } from "redux-form";
import measurementUnitService from "../../services/unit-service";
import { AppThunk, AppActions } from "../redusers/redux-store";
import { ADD_MEASUREMENT_UNIT_ACTION, REMOVE_MEASUREMENT_UNIT_ACTION, UPDATE_MEASUREMENT_UNIT_ACTION, SET_MEASUREMENT_UNITS_ACTION } from "../redusers/unit-redusers";
import { MeasurementUnitRequest } from "../types/unit/MeasurementUnitRequest";
import { MeasurementUnitInfo } from "../types/unit/MeasurementUnitInfo";
import { Dispatch } from "redux";

const actions = {
    addMeasurementUnit: (measurementUnit: MeasurementUnitInfo) => ({type: ADD_MEASUREMENT_UNIT_ACTION, measurementUnit} as const),
    setMeasurementUnits: (measurementUnits: Array<MeasurementUnitInfo>) => ({type: SET_MEASUREMENT_UNITS_ACTION, measurementUnits} as const),
    updateMeasurementUnit: (measurementUnit: MeasurementUnitInfo) => ({type: UPDATE_MEASUREMENT_UNIT_ACTION, measurementUnit} as const),
    removeMeasurementUnit: (id: number) => ({type: REMOVE_MEASUREMENT_UNIT_ACTION, id} as const)
}

export const createMeasurementUnit = (measurementUnit: MeasurementUnitRequest): Thunk => {
    return async (dispatch: Dispatch) => {
        const data = await measurementUnitService.addMeasurementUnit(measurementUnit);
        dispatch(actions.addMeasurementUnit(data));
    }
}

export const getMeasurementUnits = (skip: number, take: number): Thunk => {
    return async (dispatch: Dispatch) => {
        const data = await measurementUnitService.getMeasurementUnits(skip, take);
        dispatch(actions.setMeasurementUnits(data));
    }
}

export const editMeasurementUnit = (id: number, measurementUnit: MeasurementUnitRequest): Thunk => {
    return async (dispatch: Dispatch) => {
        const data = await measurementUnitService.editMeasurementUnit(id, measurementUnit);
        dispatch(actions.updateMeasurementUnit(data));
    }
}

export const deleteMeasurementUnit = (id: number): Thunk => {
    return async (dispatch: Dispatch) => {
        const data = await measurementUnitService.deleteMeasurementUnit(id);
        dispatch(actions.removeMeasurementUnit(data.id));
    }
}

export type MeasurementUnitActions = AppActions<typeof actions>
type Thunk = AppThunk<MeasurementUnitActions | FormAction>