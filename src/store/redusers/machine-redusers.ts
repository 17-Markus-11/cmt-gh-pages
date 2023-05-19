import { MachineActions } from "../actions/machine-actions";
import { MachineInfo } from "../types/machine/MachineInfo";

export const ADD_MACHINE_ACTION = "MACHINES/ADD_MACHINE";
export const SET_MACHINES_ACTION = "MACHINES/SET_MACHINES";
export const UPDATE_MACHINE_ACTION = "MACHINES/EDIT_MACHINE";
export const REMOVE_MACHINE_ACTION = "MACHINES/DELETE_MACHINE";

let initialState = {
    machines: [] as Array<MachineInfo>
};

const machinesReduser = (state = initialState, action: MachineActions): typeof initialState => {
    switch (action.type) {
        case ADD_MACHINE_ACTION:            
            return {...state, machines: [...state.machines, action.machine]};

        case SET_MACHINES_ACTION:
            return {...state, machines: action.machines};

        case UPDATE_MACHINE_ACTION:
            var machines = [...state.machines];
            var index = machines.findIndex(p => p.id === action.machine.id);
            machines[index] = action.machine;
            return {...state, machines: [...machines]};
    
        case REMOVE_MACHINE_ACTION:
            return {...state, machines: state.machines.filter(p => p.id !== action.id)};

        default:
            return state;
    }
}

export default machinesReduser;