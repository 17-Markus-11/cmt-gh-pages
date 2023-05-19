import { FormAction } from "redux-form";
import workerService from "../../services/worker-service";
import { AppThunk, AppActions } from "../redusers/redux-store";
import { ADD_WORKER_ACTION, REMOVE_WORKER_ACTION, UPDATE_WORKER_ACTION, SET_WORKERS_ACTION } from "../redusers/worker-redusers";
import { WorkerRequest } from "../types/worker/WorkerRequest";
import { WorkerInfo } from "../types/worker/WorkerInfo";
import { Dispatch } from "redux";

const actions = {
    addWorker: (worker: WorkerInfo) => ({type: ADD_WORKER_ACTION, worker} as const),
    setWorkers: (workers: Array<WorkerInfo>) => ({type: SET_WORKERS_ACTION, workers} as const),
    updateWorker: (worker: WorkerInfo) => ({type: UPDATE_WORKER_ACTION, worker} as const),
    removeWorker: (id: number) => ({type: REMOVE_WORKER_ACTION, id} as const)
}

export const createWorker = (worker: WorkerRequest): Thunk => {
    return async (dispatch: Dispatch) => {
        const data = await workerService.addWorker(worker);
        dispatch(actions.addWorker(data));
    }
}

export const getWorkers = (skip: number, take: number): Thunk => {
    return async (dispatch: Dispatch) => {
        const data = await workerService.getWorkers(skip, take);
        dispatch(actions.setWorkers(data));
    }
}

export const editWorker = (id: number, worker: WorkerRequest): Thunk => {
    return async (dispatch: Dispatch) => {
        const data = await workerService.editWorker(id, worker);
        dispatch(actions.updateWorker(data));
    }
}

export const deleteWorker = (id: number): Thunk => {
    return async (dispatch: Dispatch) => {
        const data = await workerService.deleteWorker(id);
        dispatch(actions.removeWorker(data.id));
    }
}

export type WorkerActions = AppActions<typeof actions>
type Thunk = AppThunk<WorkerActions | FormAction>