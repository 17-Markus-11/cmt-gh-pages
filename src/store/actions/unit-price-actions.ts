import { FormAction } from "redux-form";
import unitPriceService from "../../services/unit-price-service";
import { AppThunk, AppActions } from "../redusers/redux-store";
import { ADD_UNIT_PRICE_ACTION, REMOVE_UNIT_PRICE_ACTION, UPDATE_UNIT_PRICE_ACTION, SET_UNIT_PRICES_ACTION, SET_ACTIVE_UNIT_PRICE_ACTION } from "../redusers/unit-price-redusers";
import { UnitPriceRequest } from "../types/unit-price/UnitPriceRequest";
import { UnitPriceInfo } from "../types/unit-price/UnitPriceInfo";
import { Dispatch } from "redux";

const actions = {
    addUnitPrice: (unitPrice: UnitPriceInfo) => ({type: ADD_UNIT_PRICE_ACTION, unitPrice} as const),
    setUnitPrices: (unitPrices: Array<UnitPriceInfo>) => ({type: SET_UNIT_PRICES_ACTION, unitPrices} as const),
    setActiveUnitPrice: (unitPrice: UnitPriceInfo) => ({type: SET_ACTIVE_UNIT_PRICE_ACTION, unitPrice} as const),
    updateUnitPrice: (unitPrice: UnitPriceInfo) => ({type: UPDATE_UNIT_PRICE_ACTION, unitPrice} as const),
    removeUnitPrice: (id: number) => ({type: REMOVE_UNIT_PRICE_ACTION, id} as const)
}

export const createUnitPrice = (unitPrice: UnitPriceRequest): Thunk => {
    return async (dispatch: Dispatch) => {
        const data = await unitPriceService.addUnitPrice(unitPrice);
        dispatch(actions.addUnitPrice(data));
    }
}

export const getUnitPrices = (skip: number, take: number): Thunk => {
    return async (dispatch: Dispatch) => {
        const data = await unitPriceService.getUnitPrices(skip, take);
        dispatch(actions.setUnitPrices(data));
    }
}

export const getUnitPriceById = (id: number): Thunk => {
    return async (dispatch: Dispatch) => {
        const data = await unitPriceService.getUnitPriceById(id);
        dispatch(actions.setActiveUnitPrice(data));
    }
}

export const editUnitPrice = (id: number, unitPrice: UnitPriceRequest): Thunk => {
    return async (dispatch: Dispatch) => {
        const data = await unitPriceService.editUnitPrice(id, unitPrice);
        dispatch(actions.updateUnitPrice(data));
    }
}

export const deleteUnitPrice = (id: number): Thunk => {
    return async (dispatch: Dispatch) => {
        const data = await unitPriceService.deleteUnitPrice(id);
        dispatch(actions.removeUnitPrice(data.id));
    }
}

export const uploadUpgFile = (file: File): Thunk => {
    return async (dispatch: Dispatch) => {
        const data = await unitPriceService.uploadUpgFile(file);
        //TODO: dispatch
    }
}

export type UnitPriceActions = AppActions<typeof actions>
type Thunk = AppThunk<UnitPriceActions | FormAction>