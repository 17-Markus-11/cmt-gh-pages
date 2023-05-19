import { RegionRequest } from "../store/types/region/RegionRequest";
import { RegionInfo } from "../store/types/region/RegionInfo";
import Api from "./api-service";

const REGION_SERVICE_ROUTE = "Region";

const regionService = {
    addRegion(region: RegionRequest): Promise<RegionInfo> {
        return Api.post<RegionInfo>(`${REGION_SERVICE_ROUTE}`, region).then(res => res.data);
    },

    getRegions(skip: number, take: number): Promise<Array<RegionInfo>> {
        return Api.get<Array<RegionInfo>>(`${REGION_SERVICE_ROUTE}?skip=${skip}&take=${take}`).then(res => res.data);
    },

    editRegion(id: number, region: RegionRequest): Promise<RegionInfo> {
        return Api.put<RegionInfo>(`${REGION_SERVICE_ROUTE}/${id}`, region).then(res => res.data);
    },

    deleteRegion(id: number): Promise<RegionInfo> {
        return Api.delete<RegionInfo>(`${REGION_SERVICE_ROUTE}/${id}`).then(res => res.data);
    }
}

export default regionService;