import { connect } from "react-redux";
import { AppStore } from "../../store/redusers/redux-store";
import { createMachine, deleteMachine, editMachine, getMachines } from "../../store/actions/machine-actions";
import Table from "../common/table/Table";
import style from './Machine.module.css';
import { MachineInfo } from "../../store/types/machine/MachineInfo";
import { MachineRequest } from "../../store/types/machine/MachineRequest";

const mapState = (store: AppStore) => {
    return ({
        modifiedContainerStyle: style.modifiedContainer,
        items: store.machinesData.machines,
        defaultItem: { id: 0, name: "", costPerHour: 0, regionId: 0, region: undefined } as MachineInfo,
        itemConfig: {id: style.machineId, name: style.machineName, costPerHour: style.machineNum, regionId: style.machineNum},
        panelConfig: {id: style.machineId, name: style.machineNameInput, costPerHour: style.machineNumInput, regionId: style.machineNumInput}
    });
}

const mapActions = {
    createItem: createMachine,
    getItems: getMachines,
    editItem: editMachine,
    deleteItem: deleteMachine
};

class MachineContainer extends Table<MachineInfo, MachineRequest> {}
export default connect(mapState, mapActions)(MachineContainer);