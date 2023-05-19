import { connect } from "react-redux";
import { AppStore } from "../../store/redusers/redux-store";
import Diagram from "./Diagram";

const mapState = (store: AppStore) => {
    return ({
        items: store.chartData.chartItems
    });
};

export default connect(mapState, {})(Diagram);
