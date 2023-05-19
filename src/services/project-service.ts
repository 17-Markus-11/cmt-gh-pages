import { ProjectRequest } from "../store/types/project/ProjectRequest";
import { ProjectInfo } from "../store/types/project/ProjectInfo";
import Api from "./api-service";

const PROJECT_SERVICE_ROUTE = "Project";

const projectService = {
    addProject(project: ProjectRequest): Promise<ProjectInfo> {
        return Api.post<ProjectInfo>(`${PROJECT_SERVICE_ROUTE}`, project).then(res => res.data);
    },

    getProjects(skip: number, take: number): Promise<Array<ProjectInfo>> {
        return Api.get<Array<ProjectInfo>>(`${PROJECT_SERVICE_ROUTE}?skip=${skip}&take=${take}`).then(res => res.data);
    },

    editProject(id: number, project: ProjectRequest): Promise<ProjectInfo> {
        return Api.put<ProjectInfo>(`${PROJECT_SERVICE_ROUTE}/${id}`, project).then(res => res.data);
    },

    deleteProject(id: number): Promise<ProjectInfo> {
        return Api.delete<ProjectInfo>(`${PROJECT_SERVICE_ROUTE}/${id}`).then(res => res.data);
    }
}

export default projectService;