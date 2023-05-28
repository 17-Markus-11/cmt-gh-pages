import { ProjectRequest } from "../store/types/project/ProjectRequest";
import { ProjectInfo } from "../store/types/project/ProjectInfo";
import Api from "./api-service";
import { WorkingGroupMemberInfo, WorkingGroupRequest } from "../components/workingGroup/WorkingGroupContainer";
import { SmtrItemInfo } from "../components/smtr/SmtrContainer";
import { StructureItemInfo } from "../components/structure/StructureContainer";

const PROJECT_SERVICE_ROUTE = "Project";

const projectService = {
    addProject(project: ProjectRequest): Promise<ProjectInfo> {
        return Api.post<ProjectInfo>(`${PROJECT_SERVICE_ROUTE}`, project).then(res => res.data);
    },

    getProjects(skip: number, take: number): Promise<Array<ProjectInfo>> {
        return Api.get<Array<ProjectInfo>>(`${PROJECT_SERVICE_ROUTE}?skip=${skip}&take=${take}`).then(res => res.data);
    },

    getProjectById(id: number): Promise<ProjectInfo> {
        return Api.get<ProjectInfo>(`${PROJECT_SERVICE_ROUTE}/${id}`).then(res => res.data);
    },

    editProject(id: number, project: ProjectRequest): Promise<ProjectInfo> {
        return Api.put<ProjectInfo>(`${PROJECT_SERVICE_ROUTE}/${id}`, project).then(res => res.data);
    },

    deleteProject(id: number): Promise<ProjectInfo> {
        return Api.delete<ProjectInfo>(`${PROJECT_SERVICE_ROUTE}/${id}`).then(res => res.data);
    },

    addWorkingGroupMember(id: number, member: WorkingGroupRequest): Promise<WorkingGroupMemberInfo> {
        return Api.post<WorkingGroupMemberInfo>(`${PROJECT_SERVICE_ROUTE}/${id}/working-group`, member).then(res => res.data);
    },

    getWorkingGroup(id: number): Promise<WorkingGroupMemberInfo> {
        return Api.get<WorkingGroupMemberInfo>(`${PROJECT_SERVICE_ROUTE}/${id}/working-group`).then(res => res.data);
    },

    uploadStructureFile(id: number, file: File): Promise<ProjectInfo> {
        let formData = new FormData();
        formData.append("file", file);
      
        return Api.postForm<ProjectInfo>(`${PROJECT_SERVICE_ROUTE}/${id}/structure`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        }).then(res => res.data);
    },

    uploadSmtrFile(id: number, file: File): Promise<ProjectInfo> {
        let formData = new FormData();
        formData.append("file", file);
      
        return Api.postForm<ProjectInfo>(`${PROJECT_SERVICE_ROUTE}/${id}/smtr`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        }).then(res => res.data);
    },

    connectUpgToProject(id: number): Promise<ProjectInfo> {
        return Api.post<ProjectInfo>(`${PROJECT_SERVICE_ROUTE}/${id}/upg`).then(res => res.data);
    },

    getSmtr(id: number): Promise<Array<SmtrItemInfo>> {
        return Api.get<Array<SmtrItemInfo>>(`${PROJECT_SERVICE_ROUTE}/${id}/smtr`).then(res => res.data);
    },

    getStructure(id: number): Promise<Array<StructureItemInfo>> {
        return Api.get<Array<StructureItemInfo>>(`${PROJECT_SERVICE_ROUTE}/${id}/structure`).then(res => res.data);
    },

}

export default projectService;