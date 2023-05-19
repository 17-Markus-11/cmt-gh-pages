import { connect } from "react-redux";
import { AppStore } from "../../store/redusers/redux-store";
import { createUnitPrice, deleteUnitPrice, editUnitPrice, getUnitPrices } from "../../store/actions/unit-price-actions";
// import Table from "../common/table/Table";
// import style from './UnitPrice.module.css';
// import { UnitPriceInfo } from "../../store/types/unit-price/UnitPriceInfo";
// import { UnitPriceRequest, UnitPriceStatuses, UnitPriceTypes } from "../../store/types/unit-price/UnitPriceRequest";
import UnitPrice from "./UnitPrice";
import { MeasurementUnitInfo } from "../../store/types/unit/MeasurementUnitInfo";
import { UnitPriceStatuses, UnitPriceTypes } from "../../store/types/unit-price/UnitPriceRequest";

export interface UnitPriceItem {
    id: number,
    name: string,
    code: string,
    inGroupOrder: number,
    type: UnitPriceTypes,
    status: UnitPriceStatuses | undefined,
    unit: MeasurementUnitInfo | undefined
    // workerLaborCostPerUnit: number,
    // machineLaborCostPerUnit: number,
    // workerPaymentPerHour: number,
    // workerPaymentPerUnit: number,
    // machineOperationCostPerHour: number,
    // directCostPerUnit: number,
    // note: string,
    childs: Array<UnitPriceItem>
}

const mpUnit: MeasurementUnitInfo = {
    id: 1,
    name: "метр погонный",
    code: "мп"
}

const stUnit: MeasurementUnitInfo = {
    id: 2,
    name: "штука",
    code: "шт"
}

const mockData: UnitPriceItem[] = [
    {
        id: 1,
        name: "Установка НЕ технологического трубопровода",
        code: "НТТ-00",
        inGroupOrder: 1,
        type: UnitPriceTypes.Group,
        status: undefined,
        unit: undefined,
        childs: [
            {
                id: 2,
                name: "Монтаж внутренних систем водоснабжения и водоотведения",
                code: "НТТ-00-02",
                inGroupOrder: 1,
                type: UnitPriceTypes.Group,
                status: undefined,
                unit: undefined,
                childs: [
                    {
                        id: 4,
                        name: "Монтаж внутренних трубопроводов из ПВХ",
                        code: "НТТ-00-02-02",
                        inGroupOrder: 1,
                        type: UnitPriceTypes.Group,
                        status: undefined,
                        unit: undefined,
                        childs: [
                            {
                                id: 9,
                                name: "Монтаж внутреннего пластикового трубопровода из ПВХ, от Ду 15 до Ду 80",
                                code: "НТТ-00-02-02-01",
                                inGroupOrder: 1,
                                type: UnitPriceTypes.Item,
                                status: UnitPriceStatuses.TemporaryRegulations,
                                unit: mpUnit,
                                childs: []
                            },
                            {
                                id: 10,
                                name: "Монтаж внутреннего пластикового трубопровода из ПВХ, свыше Ду 80 до Ду 125",
                                code: "НТТ-00-02-02-02",
                                inGroupOrder: 2,
                                type: UnitPriceTypes.Item,
                                status: UnitPriceStatuses.TemporaryRegulations,
                                unit: mpUnit,
                                childs: []
                            },
                            {
                                id: 11,
                                name: "Монтаж внутреннего пластикового трубопровода из ПВХ, свыше Ду 125 до Ду 200",
                                code: "НТТ-00-02-02-03",
                                inGroupOrder: 3,
                                type: UnitPriceTypes.Item,
                                status: UnitPriceStatuses.TemporaryRegulations,
                                unit: mpUnit,
                                childs: []
                            }
                        ]
                    },
                    {
                        id: 5,
                        name: "Монтаж внутренних трубопроводов из полиэтилена или полипропилена",
                        code: "НТТ-00-02-03",
                        inGroupOrder: 2,
                        type: UnitPriceTypes.Group,
                        status: undefined,
                        unit: undefined,
                        childs: [
                            {
                                id: 12,
                                name: "Монтаж внутреннего трубопровода из полиэтилена/ полипропилена, от Ду 15 до Ду 80",
                                code: "НТТ-00-02-03-01",
                                inGroupOrder: 1,
                                type: UnitPriceTypes.Item,
                                status: UnitPriceStatuses.TemporaryRegulations,
                                unit: mpUnit,
                                childs: []
                            },
                            {
                                id: 13,
                                name: "Монтаж внутреннего трубопровода из полиэтилена/ полипропилена, свыше Ду 80 до Ду 125",
                                code: "НТТ-00-02-03-02",
                                inGroupOrder: 2,
                                type: UnitPriceTypes.Item,
                                status: UnitPriceStatuses.TemporaryRegulations,
                                unit: mpUnit,
                                childs: []
                            }
                        ]
                    },
                    {
                        id: 6,
                        name: "Монтаж внутренних трубопроводов из углеродистой стали",
                        code: "НТТ-00-02-04",
                        inGroupOrder: 3,
                        type: UnitPriceTypes.Group,
                        status: undefined,
                        unit: undefined,
                        childs: [
                            {
                                id: 14,
                                name: "Монтаж внутреннего трубопровода из углеродистой стали, от Ду 15 до Ду 80",
                                code: "НТТ-00-02-04-01",
                                inGroupOrder: 1,
                                type: UnitPriceTypes.Item,
                                status: UnitPriceStatuses.Calculation,
                                unit: mpUnit,
                                childs: []
                            },
                            {
                                id: 15,
                                name: "Монтаж внутреннего трубопровода из углеродистой стали, свыше Ду 80 до Ду 125",
                                code: "НТТ-00-02-04-02",
                                inGroupOrder: 2,
                                type: UnitPriceTypes.Item,
                                status: UnitPriceStatuses.Calculation,
                                unit: mpUnit,
                                childs: []
                            }
                        ]
                    }
                ]
            },
            {
                id: 3,
                name: "Запорно-регулирующая арматура",
                code: "НТТ-00-03",
                inGroupOrder: 2,
                type: UnitPriceTypes.Group,
                status: undefined,
                unit: undefined,
                childs: [                    
                    {
                        id: 7,
                        name: "Монтаж запорно-регулирующей арматуры из металла: шаровые краны, задвижки клиновые",
                        code: "НТТ-00-03-01",
                        inGroupOrder: 1,
                        type: UnitPriceTypes.Group,
                        status: undefined,
                        unit: undefined,
                        childs: [
                            {
                                id: 16,
                                name: "Монтаж запорно-регулирующей арматуры из металла: шаровые краны, задвижки клиновые, от Ду 15 до Ду 80",
                                code: "НТТ-00-03-01-01",
                                inGroupOrder: 1,
                                type: UnitPriceTypes.Item,
                                status: UnitPriceStatuses.TemporaryRegulations,
                                unit: stUnit,
                                childs: []
                            }
                        ]
                    },
                    {
                        id: 8,
                        name: "Монтаж запорно-регулирующей арматуры с приводом",
                        code: "НТТ-00-03-02",
                        inGroupOrder: 2,
                        type: UnitPriceTypes.Group,
                        status: undefined,
                        unit: undefined,
                        childs: [
                            {
                                id: 17,
                                name: "Монтаж запорно-регулирующей арматуры с приводом до Ду 50 мм",
                                code: "НТТ-00-03-02-01",
                                inGroupOrder: 1,
                                type: UnitPriceTypes.Item,
                                status: UnitPriceStatuses.TemporaryRegulations,
                                unit: stUnit,
                                childs: []
                            },
                            {
                                id: 18,
                                name: "Монтаж запорно-регулирующей арматуры с приводом свыше Ду 50 до Ду 80",
                                code: "НТТ-00-03-02-02",
                                inGroupOrder: 2,
                                type: UnitPriceTypes.Item,
                                status: UnitPriceStatuses.TemporaryRegulations,
                                unit: stUnit,
                                childs: []
                            },
                            {
                                id: 14,
                                name: "Монтаж запорно-регулирующей арматуры с приводом свыше Ду 80 до Ду 125",
                                code: "НТТ-00-03-02-03",
                                inGroupOrder: 3,
                                type: UnitPriceTypes.Item,
                                status: UnitPriceStatuses.TemporaryRegulations,
                                unit: stUnit,
                                childs: []
                            }
                        ]
                    }
                ]
            } 
        ]
    } 
]

const mapState = (store: AppStore) => {
    return ({
        items: mockData
    });
}

export default connect(mapState, {createUnitPrice, getUnitPrices, editUnitPrice, deleteUnitPrice})(UnitPrice);

// const defaultItem: UnitPriceInfo = {
//     id: 0,
//     parent: undefined,
//     unit: undefined,
//     parentId: undefined,
//     name: "",
//     code: "",
//     workerLaborCostPerUnit: 0,
//     machineLaborCostPerUnit: 0,
//     workerPaymentPerHour: 0,
//     workerPaymentPerUnit: 0,
//     machineOperationCostPerHour: 0,
//     machineOperationCostPerUnit: 0,
//     directCostPerUnit: 0,
//     note: "",
//     unitId: 0,
//     status: UnitPriceStatuses.NoData,
//     type: UnitPriceTypes.Group,
//     inGroupOrder: 0,
// }

// const mapState = (store: AppStore) => {
//     return ({
//         modifiedContainerStyle: style.modifiedContainer,
//         items: store.unitPricesData.unitPrices,
//         defaultItem: defaultItem,
//         itemConfig: {id: style.unitPriceId, name: style.unitPriceName, code: style.unitPriceCode, unitId: style.unitPriceNum, 
//             workerLaborCostPerUnit: style.unitPriceNum, machineLaborCostPerUnit: style.unitPriceNum, workerPaymentPerHour: style.unitPriceNum, 
//             workerPaymentPerUnit: style.unitPriceNum, machineOperationCostPerHour: style.unitPriceNum, machineOperationCostPerUnit: style.unitPriceNum, 
//             directCostPerUnit: style.unitPriceNum, note: style.unitPriceNote, status: style.unitPriceNum},
//         panelConfig: {id: style.unitPriceId, name: style.unitPriceNameInput, code: style.unitPriceCodeInput, unitId: style.unitPriceNumInput, 
//             workerLaborCostPerUnit: style.unitPriceNumInput, machineLaborCostPerUnit: style.unitPriceNumInput, workerPaymentPerHour: style.unitPriceNumInput, 
//             workerPaymentPerUnit: style.unitPriceNumInput, machineOperationCostPerHour: style.unitPriceNumInput, machineOperationCostPerUnit: style.unitPriceNum, 
//             directCostPerUnit: style.unitPriceNumInput, note: style.unitPriceNoteInput, status: style.unitPriceNumInput}
//     });
// }

// const mapActions ={
//     createItem: createUnitPrice,
//     getItems: getUnitPrices,
//     editItem: editUnitPrice,
//     deleteItem: deleteUnitPrice
// };

// class UnitPriceContainer extends Table<UnitPriceInfo, UnitPriceRequest> {}
// export default connect(mapState, mapActions)(UnitPriceContainer);
