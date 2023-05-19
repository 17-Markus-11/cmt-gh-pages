import { WorkerActions } from "../actions/worker-actions";
import { WorkerInfo } from "../types/worker/WorkerInfo";

export const ADD_WORKER_ACTION = "WORKERS/ADD_WORKER";
export const SET_WORKERS_ACTION = "WORKERS/SET_WORKERS";
export const UPDATE_WORKER_ACTION = "WORKERS/EDIT_WORKER";
export const REMOVE_WORKER_ACTION = "WORKERS/DELETE_WORKER";

let initialState = {
    workers: [] as Array<WorkerInfo>
};

const workersReduser = (state = initialState, action: WorkerActions): typeof initialState => {
    switch (action.type) {
        case ADD_WORKER_ACTION:            
            return {...state, workers: [...state.workers, action.worker]};

        case SET_WORKERS_ACTION:
            return {...state, workers: action.workers};

        case UPDATE_WORKER_ACTION:
            var workers = [...state.workers];
            var index = workers.findIndex(p => p.id === action.worker.id);
            workers[index] = action.worker;
            return {...state, workers: [...workers]};
    
        case REMOVE_WORKER_ACTION:
            return {...state, workers: state.workers.filter(p => p.id !== action.id)};

        default:
            return state;
    }
}

export default workersReduser;