import { MeasurementUnitInfo } from "../unit/MeasurementUnitInfo";
import { ParentUnitPriceResponse } from "./ParentUnitPriceInfo";
import { UnitPriceRequest } from "./UnitPriceRequest";

export interface UnitPriceInfo extends UnitPriceRequest {
    id: number,
    parent: ParentUnitPriceResponse | undefined,
    unit: MeasurementUnitInfo | undefined
}