import { Action, AnyAction, ThunkAction, configureStore } from '@reduxjs/toolkit'
import regionsReduser from "./region-redusers";
import { reducer as formReducer } from "redux-form";
import { combineReducers } from "redux";
import measurementUnitsReduser from './unit-redusers';
import workersReduser from './worker-redusers';
import projectsReduser from './project-redusers';
import machinesReduser from './machine-redusers';
import unitPricesReduser from './unit-price-redusers';
import menuReduser from './menu-redusers';
import chartReduser from './chart-reduser';

let reducer = combineReducers ({
    regionsData: regionsReduser,
    measurementUnitsData: measurementUnitsReduser,
    workersData: workersReduser,
    projectsData: projectsReduser,
    machinesData: machinesReduser,
    unitPricesData: unitPricesReduser,
    menuData: menuReduser,
    chartData: chartReduser,
    form: formReducer
});

export let store = configureStore({ reducer });

export type AppStore = ReturnType<typeof store.getState>;
export type AppActions<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never;
export type AppThunk<A extends Action<any> = AnyAction, R = Promise<void>> = ThunkAction<R, AppStore, unknown, A>;

export default store;