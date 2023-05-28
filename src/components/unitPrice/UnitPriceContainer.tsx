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

const mapState = (store: AppStore) => {
    return ({
        items: store.unitPricesData.unitPrices
    });
}

export default connect(mapState, {createUnitPrice, getUnitPrices, editUnitPrice, deleteUnitPrice})(UnitPrice);