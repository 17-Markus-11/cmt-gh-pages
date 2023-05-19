import { FormAction } from "redux-form";
import { AppThunk, AppActions } from "../redusers/redux-store";
import { Dispatch } from "redux";
import { ModuleInfo } from "../types/menu/ModuleInfo";
import { SET_MENU_ITEMS_ACTION } from "../redusers/menu-redusers";

const actions = {
    setItems: (items: Array<ModuleInfo>) => ({type: SET_MENU_ITEMS_ACTION, items} as const)
}

export const switchToModule = (module: string, id: number | undefined): Thunk => {
    return async (dispatch: Dispatch) => {
        let data: Array<ModuleInfo> = [];
        switch (module) {
            case "projects":
                data = [];
                break;

            case "project":
                data = [
                    {name: "vmtr", link: `/projects/${id}/vmtr`},
                    {name: "diagram", link: `/projects/${id}/diagram`}
                ];
                break;
        
            case "tasks":
                data = [];
                break;

            case "guide":
                data = [
                    {name: "unitPriceGuide", link: "/upg"},
                    {name: "machines", link: "/machines"},
                    {name: "workers", link: "/workers"}
                ];
                break;

            case "counterparties":
                data = [];
                break;

            case "contractor":
                data = [];
                break;

            case "admin":
                data = [
                    {name: "regions", link: "/regions"},
                    {name: "measurementUnits", link: "/units"}
                ];
                break;

            case "settings":
                data = [];
                break;

            case "instruction":
                data = [];
                break;
                                                                                                                    
            default:
                break;
        }
        dispatch(actions.setItems(data));
    }
}

export type MenuActions = AppActions<typeof actions>
type Thunk = AppThunk<MenuActions | FormAction>