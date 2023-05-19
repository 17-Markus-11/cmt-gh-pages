import { ProjectActions } from "../actions/project-actions";
import { ProjectInfo } from "../types/project/ProjectInfo";

export const ADD_PROJECT_ACTION = "PROJECTS/ADD_PROJECT";
export const SET_PROJECTS_ACTION = "PROJECTS/SET_PROJECTS";
export const UPDATE_PROJECT_ACTION = "PROJECTS/EDIT_PROJECT";
export const REMOVE_PROJECT_ACTION = "PROJECTS/DELETE_PROJECT";

let initialState = {
    projects: [] as Array<ProjectInfo>
};

const projectsReduser = (state = initialState, action: ProjectActions): typeof initialState => {
    switch (action.type) {
        case ADD_PROJECT_ACTION:            
            return {...state, projects: [...state.projects, action.project]};

        case SET_PROJECTS_ACTION:
            return {...state, projects: action.projects};

        case UPDATE_PROJECT_ACTION:
            var projects = [...state.projects];
            var index = projects.findIndex(p => p.id === action.project.id);
            projects[index] = action.project;
            return {...state, projects: [...projects]};
    
        case REMOVE_PROJECT_ACTION:
            return {...state, projects: state.projects.filter(p => p.id !== action.id)};

        default:
            return state;
    }
}

export default projectsReduser;