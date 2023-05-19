import { FormAction } from "redux-form";
import machineService from "../../services/machine-service";
import { AppThunk, AppActions } from "../redusers/redux-store";
import { ADD_MACHINE_ACTION, REMOVE_MACHINE_ACTION, UPDATE_MACHINE_ACTION, SET_MACHINES_ACTION } from "../redusers/machine-redusers";
import { MachineRequest } from "../types/machine/MachineRequest";
import { MachineInfo } from "../types/machine/MachineInfo";
import { Dispatch } from "redux";

const actions = {
    addMachine: (machine: MachineInfo) => ({type: ADD_MACHINE_ACTION, machine} as const),
    setMachines: (machines: Array<MachineInfo>) => ({type: SET_MACHINES_ACTION, machines} as const),
    updateMachine: (machine: MachineInfo) => ({type: UPDATE_MACHINE_ACTION, machine} as const),
    removeMachine: (id: number) => ({type: REMOVE_MACHINE_ACTION, id} as const)
}

export const createMachine = (machine: MachineRequest): Thunk => {
    return async (dispatch: Dispatch) => {
        const data = await machineService.addMachine(machine);
        dispatch(actions.addMachine(data));
    }
}

export const getMachines = (skip: number, take: number): Thunk => {
    return async (dispatch: Dispatch) => {
        const data = await machineService.getMachines(skip, take);
        dispatch(actions.setMachines(data));
    }
}

export const editMachine = (id: number, machine: MachineRequest): Thunk => {
    return async (dispatch: Dispatch) => {
        const data = await machineService.editMachine(id, machine);
        dispatch(actions.updateMachine(data));
    }
}

export const deleteMachine = (id: number): Thunk => {
    return async (dispatch: Dispatch) => {
        const data = await machineService.deleteMachine(id);
        dispatch(actions.removeMachine(data.id));
    }
}

export type MachineActions = AppActions<typeof actions>
type Thunk = AppThunk<MachineActions | FormAction>