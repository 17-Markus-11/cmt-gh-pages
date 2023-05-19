import Header from "./Header";
import { connect } from "react-redux";
import { AppStore } from "../../store/redusers/redux-store";

const mapState = (store: AppStore) => {
    return ({
        menuItems: store.menuData.menuItems
    });
};

export default connect(mapState, {})(Header);
