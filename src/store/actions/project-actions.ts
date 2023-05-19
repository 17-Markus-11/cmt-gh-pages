import { FormAction } from "redux-form";
import projectService from "../../services/project-service";
import { AppThunk, AppActions } from "../redusers/redux-store";
import { ADD_PROJECT_ACTION, REMOVE_PROJECT_ACTION, UPDATE_PROJECT_ACTION, SET_PROJECTS_ACTION } from "../redusers/project-redusers";
import { ProjectRequest } from "../types/project/ProjectRequest";
import { ProjectInfo } from "../types/project/ProjectInfo";
import { Dispatch } from "redux";

const actions = {
    addProject: (project: ProjectInfo) => ({type: ADD_PROJECT_ACTION, project} as const),
    setProjects: (projects: Array<ProjectInfo>) => ({type: SET_PROJECTS_ACTION, projects} as const),
    updateProject: (project: ProjectInfo) => ({type: UPDATE_PROJECT_ACTION, project} as const),
    removeProject: (id: number) => ({type: REMOVE_PROJECT_ACTION, id} as const)
}

export const createProject = (project: ProjectRequest): Thunk => {
    return async (dispatch: Dispatch) => {
        const data = await projectService.addProject(project);
        dispatch(actions.addProject(data));
    }
}

export const getProjects = (skip: number, take: number): Thunk => {
    return async (dispatch: Dispatch) => {
        const data = await projectService.getProjects(skip, take);
        dispatch(actions.setProjects(data));
    }
}

export const editProject = (id: number, project: ProjectRequest): Thunk => {
    return async (dispatch: Dispatch) => {
        const data = await projectService.editProject(id, project);
        dispatch(actions.updateProject(data));
    }
}

export const deleteProject = (id: number): Thunk => {
    return async (dispatch: Dispatch) => {
        const data = await projectService.deleteProject(id);
        dispatch(actions.removeProject(data.id));
    }
}

export type ProjectActions = AppActions<typeof actions>
type Thunk = AppThunk<ProjectActions | FormAction>