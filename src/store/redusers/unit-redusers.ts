import { MeasurementUnitActions } from "../actions/unit-actions";
import { MeasurementUnitInfo } from "../types/unit/MeasurementUnitInfo";

export const ADD_MEASUREMENT_UNIT_ACTION = "MEASUREMENT_UNITS/ADD_MEASUREMENT_UNIT";
export const SET_MEASUREMENT_UNITS_ACTION = "MEASUREMENT_UNITS/SET_MEASUREMENT_UNITS";
export const UPDATE_MEASUREMENT_UNIT_ACTION = "MEASUREMENT_UNITS/EDIT_MEASUREMENT_UNIT";
export const REMOVE_MEASUREMENT_UNIT_ACTION = "MEASUREMENT_UNITS/DELETE_MEASUREMENT_UNIT";

let initialState = {
    measurementUnits: [] as Array<MeasurementUnitInfo>
};

const measurementUnitsReduser = (state = initialState, action: MeasurementUnitActions): typeof initialState => {
    switch (action.type) {
        case ADD_MEASUREMENT_UNIT_ACTION:            
            return {...state, measurementUnits: [...state.measurementUnits, action.measurementUnit]};

        case SET_MEASUREMENT_UNITS_ACTION:
            return {...state, measurementUnits: action.measurementUnits};

        case UPDATE_MEASUREMENT_UNIT_ACTION:
            var measurementUnits = [...state.measurementUnits];
            var index = measurementUnits.findIndex(p => p.id === action.measurementUnit.id);
            measurementUnits[index] = action.measurementUnit;
            return {...state, measurementUnits: [...measurementUnits]};
    
        case REMOVE_MEASUREMENT_UNIT_ACTION:
            return {...state, measurementUnits: state.measurementUnits.filter(p => p.id !== action.id)};

        default:
            return state;
    }
}

export default measurementUnitsReduser;