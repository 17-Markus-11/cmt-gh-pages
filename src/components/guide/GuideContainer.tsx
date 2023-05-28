import { connect } from "react-redux";
import { AppStore } from "../../store/redusers/redux-store";
import Guide from "./Guide";
import { getRegions } from "../../store/actions/region-actions";
import { uploadUpgFile } from "../../store/actions/unit-price-actions";

const mapState = (store: AppStore) => {
    return ({
        regions: store.regionsData.regions
    });
}

export default connect(mapState, {getRegions, uploadUpgFile})(Guide);
