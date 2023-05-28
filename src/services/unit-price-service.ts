import { UnitPriceRequest } from "../store/types/unit-price/UnitPriceRequest";
import { UnitPriceInfo } from "../store/types/unit-price/UnitPriceInfo";
import Api from "./api-service";

const UNIT_PRICE_SERVICE_ROUTE = "UnitPriceGuide";

const unitPriceService = {
    addUnitPrice(unitPrice: UnitPriceRequest): Promise<UnitPriceInfo> {
        return Api.post<UnitPriceInfo>(`${UNIT_PRICE_SERVICE_ROUTE}`, unitPrice).then(res => res.data);
    },

    getUnitPrices(skip: number, take: number): Promise<Array<UnitPriceInfo>> {
        return Api.get<Array<UnitPriceInfo>>(`${UNIT_PRICE_SERVICE_ROUTE}?skip=${skip}&take=${take}`).then(res => res.data);
    },

    getUnitPriceById(id: number): Promise<UnitPriceInfo> {
        return Api.get<UnitPriceInfo>(`${UNIT_PRICE_SERVICE_ROUTE}/${id}`).then(res => res.data);
    },

    editUnitPrice(id: number, unitPrice: UnitPriceRequest): Promise<UnitPriceInfo> {
        return Api.put<UnitPriceInfo>(`${UNIT_PRICE_SERVICE_ROUTE}/${id}`, unitPrice).then(res => res.data);
    },

    deleteUnitPrice(id: number): Promise<UnitPriceInfo> {
        return Api.delete<UnitPriceInfo>(`${UNIT_PRICE_SERVICE_ROUTE}/${id}`).then(res => res.data);
    },
    
    uploadUpgFile(file: File): Promise<any> {
        let formData = new FormData();
        formData.append("file", file);
      
        return Api.postForm<any>(`${UNIT_PRICE_SERVICE_ROUTE}/import`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        }).then(res => res.data);
    }
}

export default unitPriceService;