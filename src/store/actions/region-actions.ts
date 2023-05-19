import { FormAction } from "redux-form";
import regionService from "../../services/region-service";
import { AppThunk, AppActions } from "../redusers/redux-store";
import { ADD_REGION_ACTION, REMOVE_REGION_ACTION, UPDATE_REGION_ACTION, SET_REGIONS_ACTION } from "../redusers/region-redusers";
import { RegionRequest } from "../types/region/RegionRequest";
import { RegionInfo } from "../types/region/RegionInfo";
import { Dispatch } from "redux";

const actions = {
    addRegion: (region: RegionInfo) => ({type: ADD_REGION_ACTION, region} as const),
    setRegions: (regions: Array<RegionInfo>) => ({type: SET_REGIONS_ACTION, regions} as const),
    updateRegion: (region: RegionInfo) => ({type: UPDATE_REGION_ACTION, region} as const),
    removeRegion: (id: number) => ({type: REMOVE_REGION_ACTION, id} as const)
}

export const createRegion = (region: RegionRequest): Thunk => {
    return async (dispatch: Dispatch) => {
        const data = await regionService.addRegion(region);
        dispatch(actions.addRegion(data));
    }
}

export const getRegions = (skip: number, take: number): Thunk => {
    return async (dispatch: Dispatch) => {
        const data = await regionService.getRegions(skip, take);
        dispatch(actions.setRegions(data));
    }
}

export const editRegion = (id: number, region: RegionRequest): Thunk => {
    return async (dispatch: Dispatch) => {
        const data = await regionService.editRegion(id, region);
        dispatch(actions.updateRegion(data));
    }
}

export const deleteRegion = (id: number): Thunk => {
    return async (dispatch: Dispatch) => {
        const data = await regionService.deleteRegion(id);
        dispatch(actions.removeRegion(data.id));
    }
}

export type RegionActions = AppActions<typeof actions>
type Thunk = AppThunk<RegionActions | FormAction>