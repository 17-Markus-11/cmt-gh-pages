import { Dictionary } from "@reduxjs/toolkit";
import { RegionInfo } from "../region/RegionInfo";

export interface WorkerRequest extends Dictionary<any> {
    name: string,
    costPerHour: number,
    directPayment: number,
    personalIncomeTax: number,
    insurancePremiums: number,
    vacationAllowance: number,
    qualificationCosts: number,
    obtainingWorkPermitsCosts: number,
    consumablesCost: number,
    crampedConditions: number,
    regionId: number,
    region: RegionInfo | undefined
}