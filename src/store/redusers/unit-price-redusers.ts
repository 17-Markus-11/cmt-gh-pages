import { UnitPriceActions } from "../actions/unit-price-actions";
import { UnitPriceInfo } from "../types/unit-price/UnitPriceInfo";

export const ADD_UNIT_PRICE_ACTION = "UNIT_PRICES/ADD_UNIT_PRICE";
export const SET_UNIT_PRICES_ACTION = "UNIT_PRICES/SET_UNIT_PRICES";
export const SET_ACTIVE_UNIT_PRICE_ACTION = "UNIT_PRICES/SET_ACTIVE_UNIT_PRICE_ACTION";
export const UPDATE_UNIT_PRICE_ACTION = "UNIT_PRICES/EDIT_UNIT_PRICE";
export const REMOVE_UNIT_PRICE_ACTION = "UNIT_PRICES/DELETE_UNIT_PRICE";

let initialState = {
    unitPrices: [] as Array<UnitPriceInfo>,
    activeUnitPrice: {} as UnitPriceInfo
};

const unitPricesReduser = (state = initialState, action: UnitPriceActions): typeof initialState => {
    switch (action.type) {
        case ADD_UNIT_PRICE_ACTION:            
            return {...state, unitPrices: [...state.unitPrices, action.unitPrice]};

        case SET_UNIT_PRICES_ACTION:
            return {...state, unitPrices: action.unitPrices};

        case SET_ACTIVE_UNIT_PRICE_ACTION:
            return {...state, activeUnitPrice: action.unitPrice};

        case UPDATE_UNIT_PRICE_ACTION:
            var unitPrices = [...state.unitPrices];
            var index = unitPrices.findIndex(p => p.id === action.unitPrice.id);
            unitPrices[index] = action.unitPrice;
            return {...state, unitPrices: [...unitPrices]};
    
        case REMOVE_UNIT_PRICE_ACTION:
            return {...state, unitPrices: state.unitPrices.filter(p => p.id !== action.id)};

        default:
            return state;
    }
}

export default unitPricesReduser;