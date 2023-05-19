import { MeasurementUnitRequest } from "../store/types/unit/MeasurementUnitRequest";
import { MeasurementUnitInfo } from "../store/types/unit/MeasurementUnitInfo";
import Api from "./api-service";

const REGION_SERVICE_ROUTE = "MeasurementUnit";

const measurementUnitService = {
    addMeasurementUnit(measurementUnit: MeasurementUnitRequest): Promise<MeasurementUnitInfo> {
        return Api.post<MeasurementUnitInfo>(`${REGION_SERVICE_ROUTE}`, measurementUnit).then(res => res.data);
    },

    getMeasurementUnits(skip: number, take: number): Promise<Array<MeasurementUnitInfo>> {
        return Api.get<Array<MeasurementUnitInfo>>(`${REGION_SERVICE_ROUTE}?skip=${skip}&take=${take}`).then(res => res.data);
    },

    editMeasurementUnit(id: number, measurementUnit: MeasurementUnitRequest): Promise<MeasurementUnitInfo> {
        return Api.put<MeasurementUnitInfo>(`${REGION_SERVICE_ROUTE}/${id}`, measurementUnit).then(res => res.data);
    },

    deleteMeasurementUnit(id: number): Promise<MeasurementUnitInfo> {
        return Api.delete<MeasurementUnitInfo>(`${REGION_SERVICE_ROUTE}/${id}`).then(res => res.data);
    }
}

export default measurementUnitService;