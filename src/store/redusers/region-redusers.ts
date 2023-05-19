import { RegionActions } from "../actions/region-actions";
import { RegionInfo } from "../types/region/RegionInfo";

export const ADD_REGION_ACTION = "REGIONS/ADD_REGION";
export const SET_REGIONS_ACTION = "REGIONS/SET_REGIONS";
export const UPDATE_REGION_ACTION = "REGIONS/EDIT_REGION";
export const REMOVE_REGION_ACTION = "REGIONS/DELETE_REGION";

let initialState = {
    regions: [] as Array<RegionInfo>
};

const regionsReduser = (state = initialState, action: RegionActions): typeof initialState => {
    switch (action.type) {
        case ADD_REGION_ACTION:            
            return {...state, regions: [...state.regions, action.region]};

        case SET_REGIONS_ACTION:
            return {...state, regions: action.regions};

        case UPDATE_REGION_ACTION:
            var regions = [...state.regions];
            var index = regions.findIndex(p => p.id === action.region.id);
            regions[index] = action.region;
            return {...state, regions: [...regions]};
    
        case REMOVE_REGION_ACTION:
            return {...state, regions: state.regions.filter(p => p.id !== action.id)};

        default:
            return state;
    }
}

export default regionsReduser;