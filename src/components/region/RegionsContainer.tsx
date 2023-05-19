import { connect } from "react-redux";
import { AppStore } from "../../store/redusers/redux-store";
import { createRegion, deleteRegion, editRegion, getRegions } from "../../store/actions/region-actions";
import Table from "../common/table/Table";
import style from './Region.module.css';
import { RegionInfo } from "../../store/types/region/RegionInfo";
import { RegionRequest } from "../../store/types/region/RegionRequest";

const mapState = (store: AppStore) => {
    return ({
        modifiedContainerStyle: style.modifiedContainer,
        items: store.regionsData.regions,
        defaultItem: { id: 0, name: "", code: "" } as RegionInfo,
        itemConfig: {id: style.regionId, name: style.regionName, code: style.regionCode},
        panelConfig: {id: style.regionId, name: style.regionNameInput, code: style.regionCodeInput}
    });
}

const mapActions ={
    createItem: createRegion,
    getItems: getRegions,
    editItem: editRegion,
    deleteItem: deleteRegion
};

class RegionContainer extends Table<RegionInfo, RegionRequest> {}
export default connect(mapState, mapActions)(RegionContainer);