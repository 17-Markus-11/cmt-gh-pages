import { MachineRequest } from "../store/types/machine/MachineRequest";
import { MachineInfo } from "../store/types/machine/MachineInfo";
import Api from "./api-service";

const MACHINE_SERVICE_ROUTE = "Machine";

const machineService = {
    addMachine(machine: MachineRequest): Promise<MachineInfo> {
        return Api.post<MachineInfo>(`${MACHINE_SERVICE_ROUTE}`, machine).then(res => res.data);
    },

    getMachines(skip: number, take: number): Promise<Array<MachineInfo>> {
        return Api.get<Array<MachineInfo>>(`${MACHINE_SERVICE_ROUTE}?skip=${skip}&take=${take}`).then(res => res.data);
    },

    editMachine(id: number, machine: MachineRequest): Promise<MachineInfo> {
        return Api.put<MachineInfo>(`${MACHINE_SERVICE_ROUTE}/${id}`, machine).then(res => res.data);
    },

    deleteMachine(id: number): Promise<MachineInfo> {
        return Api.delete<MachineInfo>(`${MACHINE_SERVICE_ROUTE}/${id}`).then(res => res.data);
    }
}

export default machineService;