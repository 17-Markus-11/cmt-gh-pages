import { FormAction } from "redux-form";
import projectService from "../../services/project-service";
import { AppThunk, AppActions } from "../redusers/redux-store";
import { ADD_PROJECT_ACTION, REMOVE_PROJECT_ACTION, UPDATE_PROJECT_ACTION, SET_PROJECTS_ACTION, SET_ACTIVE_PROJECT_ACTION, ADD_WORKING_GROUP_MEMBER_ACTION, SET_WORKING_GROUP_ACTION, SET_SMTR_ACTION, SET_STRUCTURE_ACTION } from "../redusers/project-redusers";
import { ProjectRequest } from "../types/project/ProjectRequest";
import { ProjectInfo } from "../types/project/ProjectInfo";
import { Dispatch } from "redux";
import { WorkingGroupMemberInfo, WorkingGroupRequest } from "../../components/workingGroup/WorkingGroupContainer";
import { SmtrItemInfo } from "../../components/smtr/SmtrContainer";
import { StructureItemInfo } from "../../components/structure/StructureContainer";

const actions = {
    addProject: (project: ProjectInfo) => ({type: ADD_PROJECT_ACTION, project} as const),
    setProjects: (projects: Array<ProjectInfo>) => ({type: SET_PROJECTS_ACTION, projects} as const),
    setActiveProject: (project: ProjectInfo) => ({type: SET_ACTIVE_PROJECT_ACTION, project} as const),
    updateProject: (project: ProjectInfo) => ({type: UPDATE_PROJECT_ACTION, project} as const),
    removeProject: (id: number) => ({type: REMOVE_PROJECT_ACTION, id} as const),
    // addWorkingGroupMember: (member: WorkingGroupMemberInfo) => ({type: ADD_WORKING_GROUP_MEMBER_ACTION, member} as const),
    setWorkingGroup: (workingGroup: WorkingGroupMemberInfo) => ({type: SET_WORKING_GROUP_ACTION, workingGroup} as const),
    setSmtr: (smtr: Array<SmtrItemInfo>) => ({type: SET_SMTR_ACTION, smtr} as const),
    setStructure: (structure: Array<StructureItemInfo>) => ({type: SET_STRUCTURE_ACTION, structure} as const)
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

export const getProjectById = (id: number): Thunk => {
    return async (dispatch: Dispatch) => {
        const data = await projectService.getProjectById(id);
        dispatch(actions.setActiveProject(data));
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

export const uploadStructureFile = (id: number, file: File): Thunk => {
    return async (dispatch: Dispatch) => {
        const data = await projectService.uploadStructureFile(id, file);
        dispatch(actions.setActiveProject(data));
    }
}

export const uploadSmtrFile = (id: number, file: File): Thunk => {
    return async (dispatch: Dispatch) => {
        const data = await projectService.uploadSmtrFile(id, file);
        dispatch(actions.setActiveProject(data));
    }
}

export const addWorkingGroupMember = (id: number, member: WorkingGroupRequest): Thunk => {
    return async (dispatch: Dispatch) => {
        const data = await projectService.addWorkingGroupMember(id, member);
        dispatch(actions.setWorkingGroup(data));
    }
}

export const getWorkingGroup = (id: number): Thunk => {
    return async (dispatch: Dispatch) => {
        const data = await projectService.getWorkingGroup(id);
        dispatch(actions.setWorkingGroup(data));
    }
}

export const connectUpgToProject = (id: number): Thunk => {
    return async (dispatch: Dispatch) => {
        const data = await projectService.connectUpgToProject(id);
        dispatch(actions.setActiveProject(data));
    }
}

export const getSmtr = (id: number): Thunk => {
    return async (dispatch: Dispatch) => {
        const data = await projectService.getSmtr(id);
        dispatch(actions.setSmtr(data));
    }
}

export const getStructure = (id: number): Thunk => {
    return async (dispatch: Dispatch) => {
        const data = await projectService.getStructure(id);
        dispatch(actions.setStructure(data));
    }
}

export type ProjectActions = AppActions<typeof actions>
type Thunk = AppThunk<ProjectActions | FormAction>