import { connect } from "react-redux";
import { AppStore } from "../../store/redusers/redux-store";
import style from './Guide.module.css';
import Guide from "./Guide";
import { getRegions } from "../../store/actions/region-actions";

const mapState = (store: AppStore) => {
    return ({
        regions: store.regionsData.regions
    });
}

export default connect(mapState, {getRegions})(Guide);
