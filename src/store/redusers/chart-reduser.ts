import { MenuActions } from "../actions/menu-actions";
import { ChartItemInfo } from "../types/chart/ChartItemInfo";

export const SET_MENU_ITEMS_ACTION = "MENU/SET_MENU_ITEMS_ACTION";

let initialState = {
    chartItems: [
        {
            isGroup: true,
            name: "Титул 1",
            subItems: [
                {start: "12.05.23", end: "27.02.24"}, 
                {start: "28.05.23", end: "03.05.24"}
            ]
        },
        {
            isGroup: false,
            name: "Работа 1",
            subItems: [
                {start: "12.05.23", end: "25.07.23"}, 
                {start: "28.05.23", end: "05.08.23"}
            ]
        },
        {
            isGroup: false,
            name: "Работа 2",
            subItems: [
                {start: "26.07.23", end: "27.02.24"}, 
                {start: "06.08.23", end: "03.05.24"}
            ]
        }
    ] as Array<ChartItemInfo>
};

const chartReduser = (state = initialState, action: MenuActions): typeof initialState => {
    switch (action.type) {

        default:
            return state;
    }
}

export default chartReduser;