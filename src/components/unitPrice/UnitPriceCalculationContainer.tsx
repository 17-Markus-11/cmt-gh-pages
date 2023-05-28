import { Component } from "react";
import { connect } from "react-redux";
import { AppStore } from "../../store/redusers/redux-store";
import { UnitPriceStatuses, UnitPriceTypes } from "../../store/types/unit-price/UnitPriceRequest";
import { MeasurementUnitInfo } from "../../store/types/unit/MeasurementUnitInfo";
import UnitPriceCalculation from "./UnitPriceCalculation";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import { getUnitPriceById } from "../../store/actions/unit-price-actions";
import { UnitPriceInfo } from "../../store/types/unit-price/UnitPriceInfo";

export interface UnitPriceResourceInfo {
    index: number,
    name: string,
    type: string,
    workerLaborCostPerHour: number,
    machineLaborCostPerHour: number
}

const resourceItems: UnitPriceResourceInfo[] = [
    {
        index: 1,
        name: "Автомобиль бортовой, г/п до 5 тн",
        type: "МиМ",
        workerLaborCostPerHour: 0.00,
        machineLaborCostPerHour: 0.09
    },
    {
        index: 2,
        name: "Автомобиль бортовой, г/п 1,5 т и менее",
        type: "МиМ",
        workerLaborCostPerHour: 0.00,
        machineLaborCostPerHour: 0.02
    },
    {
        index: 3,
        name: "Разнорабочий",
        type: "ОР",
        workerLaborCostPerHour: 0.18,
        machineLaborCostPerHour: 0.00
    },
    {
        index: 4,
        name: "Монтажник систем отопления",
        type: "ОР",
        workerLaborCostPerHour: 0.81,
        machineLaborCostPerHour: 0.00
    },
];

export interface UnitPriceSpecificationInfo {
    index: string,
    name: string,
    description: string
}

const specificationItems: UnitPriceSpecificationInfo[] = [
    {
        index: "А",
        name: "Состав работ",
        description: "Доставка МТР с приобъектного склада в зону монтажа, обеспечение требований ОТ и ТБ, разметка, сверление отверстий, монтаж, уборка мусора"
    },
    {
        index: "Б",
        name: "Исключения",
        description: "Радиаторные клапана"
    },
    {
        index: "В",
        name: "Измерение",
        description: "Кол-во устанавливаемых радиаторов весом до 50 кг за шт."
    },
    {
        index: "Г",
        name: "Единица измерения",
        description: "шт."
    },
]

const mapState = (store: AppStore) => {
    return ({
        item: store.unitPricesData.activeUnitPrice,
        resourceItems: resourceItems,
        specificationItems: specificationItems
    });
}

export default compose<React.ComponentType>(
    connect(mapState, {getUnitPriceById}),
    withRouter
)(UnitPriceCalculation);