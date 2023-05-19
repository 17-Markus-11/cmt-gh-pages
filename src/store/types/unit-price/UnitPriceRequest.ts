import { Dictionary } from "@reduxjs/toolkit";

export interface UnitPriceRequest extends Dictionary<any> {
    parentId: number | undefined,
    name: string,
    code: string,
    workerLaborCostPerUnit: number,
    machineLaborCostPerUnit: number,
    workerPaymentPerHour: number,
    workerPaymentPerUnit: number,
    machineOperationCostPerHour: number,
    machineOperationCostPerUnit: number
    directCostPerUnit: number,
    note: string,
    unitId: number,
    status: UnitPriceStatuses,
    type: UnitPriceTypes,
    inGroupOrder: number,
}

export enum UnitPriceStatuses {
    NoData,
    Calculation,
    TemporaryRegulations,
    Canceled
}

export enum UnitPriceTypes
{
    Group,
    Item
}