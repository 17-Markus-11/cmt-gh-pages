import { MeasurementUnitInfo } from "../unit/MeasurementUnitInfo";
import { UnitPriceStatuses, UnitPriceTypes } from "./UnitPriceRequest";

export interface UnitPriceInfo {    
    id: number,
    name: string,
    code: string,
    inGroupOrder: number,
    type: UnitPriceTypes,
    status: UnitPriceStatuses,
    unit: MeasurementUnitInfo
    workerLaborCostPerUnit: number,
    machineLaborCostPerUnit: number,
    workerPaymentPerHour: number,
    workerPaymentPerUnit: number,
    machineOperationCostPerHour: number,
    machineOperationCostPerUnit: number,
    directCostPerUnit: number,
    enlargement1Code: string,
    enlargement1Name: string,
    enlargement1Coeficient: number,
    enlargement2Code: string,
    enlargement2Name: string,
    enlargement2Coeficient: number,
    note: string,
    childs: Array<UnitPriceInfo>
}