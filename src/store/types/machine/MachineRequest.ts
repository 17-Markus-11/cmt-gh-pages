import { Dictionary } from "@reduxjs/toolkit";
import { RegionInfo } from "../region/RegionInfo";

export interface MachineRequest extends Dictionary<any> {
    name: string,
    costPerHour: number,
    regionId: number,
    region: RegionInfo | undefined
}