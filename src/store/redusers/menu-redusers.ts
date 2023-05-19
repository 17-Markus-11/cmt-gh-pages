import { MenuActions } from "../actions/menu-actions";
import { ModuleInfo } from "../types/menu/ModuleInfo";

export const SET_MENU_ITEMS_ACTION = "MENU/SET_MENU_ITEMS_ACTION";

let initialState = {
    menuItems: [] as Array<ModuleInfo>,
    activeItem : "" //TODO: implement active module highlighting
};

const menuReduser = (state = initialState, action: MenuActions): typeof initialState => {
    switch (action.type) {
        case SET_MENU_ITEMS_ACTION:
            return {...state, menuItems: action.items};

        default:
            return state;
    }
}

export default menuReduser;