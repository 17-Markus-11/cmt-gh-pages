import { Dictionary } from "@reduxjs/toolkit";

export interface MeasurementUnitRequest extends Dictionary<any> {
    name: string,
    code: string
}