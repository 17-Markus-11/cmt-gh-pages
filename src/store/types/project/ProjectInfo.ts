import { ProjectRequest } from "./ProjectRequest";

export interface ProjectInfo extends ProjectRequest {
    id: number,
    createdDate: string,
    isSmtrSetuped: boolean,
    isStructureSetuped: boolean,
    isUpgSetuped: boolean
}