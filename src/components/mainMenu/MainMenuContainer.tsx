import { connect } from "react-redux";
import { switchToModule } from "../../store/actions/menu-actions";
import MainMenu from "./MainMenu";
import { AppStore } from "../../store/redusers/redux-store";

const mapState = (store: AppStore) => {
    return ({
        activeModule: store.menuData.activeItem
    });
}

export default connect(mapState, {switchToModule})(MainMenu);
