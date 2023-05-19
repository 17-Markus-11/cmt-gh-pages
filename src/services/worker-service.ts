import { WorkerRequest } from "../store/types/worker/WorkerRequest";
import { WorkerInfo } from "../store/types/worker/WorkerInfo";
import Api from "./api-service";

const WORKER_SERVICE_ROUTE = "Worker";

const workerService = {
    addWorker(worker: WorkerRequest): Promise<WorkerInfo> {
        return Api.post<WorkerInfo>(`${WORKER_SERVICE_ROUTE}`, worker).then(res => res.data);
    },

    getWorkers(skip: number, take: number): Promise<Array<WorkerInfo>> {
        return Api.get<Array<WorkerInfo>>(`${WORKER_SERVICE_ROUTE}?skip=${skip}&take=${take}`).then(res => res.data);
    },

    editWorker(id: number, worker: WorkerRequest): Promise<WorkerInfo> {
        return Api.put<WorkerInfo>(`${WORKER_SERVICE_ROUTE}/${id}`, worker).then(res => res.data);
    },

    deleteWorker(id: number): Promise<WorkerInfo> {
        return Api.delete<WorkerInfo>(`${WORKER_SERVICE_ROUTE}/${id}`).then(res => res.data);
    }
}

export default workerService;