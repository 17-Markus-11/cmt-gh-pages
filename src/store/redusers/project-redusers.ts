import { SmtrItemInfo } from "../../components/smtr/SmtrContainer";
import { StructureItemInfo } from "../../components/structure/StructureContainer";
import { WorkingGroupMemberInfo } from "../../components/workingGroup/WorkingGroupContainer";
import { ProjectActions } from "../actions/project-actions";
import { ProjectInfo } from "../types/project/ProjectInfo";

export const ADD_PROJECT_ACTION = "PROJECTS/ADD_PROJECT";
export const SET_PROJECTS_ACTION = "PROJECTS/SET_PROJECTS";
export const SET_ACTIVE_PROJECT_ACTION = "PROJECTS/SET_ACTIVE_PROJECT";
export const UPDATE_PROJECT_ACTION = "PROJECTS/EDIT_PROJECT";
export const REMOVE_PROJECT_ACTION = "PROJECTS/DELETE_PROJECT";
export const ADD_WORKING_GROUP_MEMBER_ACTION = "PROJECTS/ADD_WORKING_GROUP_MEMBER";
export const SET_WORKING_GROUP_ACTION = "PROJECTS/SET_WORKING_GROUP";
export const SET_SMTR_ACTION = "PROJECTS/SET_SMTR";
export const SET_STRUCTURE_ACTION = "PROJECTS/SET_STRUCTURE";

let initialState = {
    projects: [] as Array<ProjectInfo>,
    workingGroup: null as WorkingGroupMemberInfo | null,
    smtr: [] as Array<SmtrItemInfo>,
    structure: [] as Array<StructureItemInfo>,
    activeProject: {
        name: "Project",
        description: "Project description"
    } as ProjectInfo
};

const projectsReduser = (state = initialState, action: ProjectActions): typeof initialState => {
    switch (action.type) {
        case ADD_PROJECT_ACTION:            
            return {...state, projects: [...state.projects, action.project]};

        case SET_PROJECTS_ACTION:
            return {...state, projects: action.projects};

        case SET_ACTIVE_PROJECT_ACTION:
            return {...state, activeProject: action.project}

        case UPDATE_PROJECT_ACTION:
            var projects = [...state.projects];
            var index = projects.findIndex(p => p.id === action.project.id);
            projects[index] = action.project;
            return {...state, projects: [...projects]};
    
        case REMOVE_PROJECT_ACTION:
            return {...state, projects: state.projects.filter(p => p.id !== action.id)};

        case SET_SMTR_ACTION:
            return {...state, smtr: action.smtr};
    
        case SET_STRUCTURE_ACTION:
            return {...state, structure: action.structure};
                
        // case ADD_WORKING_GROUP_MEMBER_ACTION:
        //     //TODO: add some logic with insertion to tree
        //     return {...state}; 
        
        case SET_WORKING_GROUP_ACTION:
            return {...state, workingGroup: action.workingGroup}
        
        default:
            return state;
    }
}

export default projectsReduser;