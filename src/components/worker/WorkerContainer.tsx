import { connect } from "react-redux";
import { AppStore } from "../../store/redusers/redux-store";
import { createWorker, deleteWorker, editWorker, getWorkers } from "../../store/actions/worker-actions";
import Table from "../common/table/Table";
import style from './Worker.module.css';
import { WorkerInfo } from "../../store/types/worker/WorkerInfo";
import { WorkerRequest } from "../../store/types/worker/WorkerRequest";

const defaultItem : WorkerInfo = {
    id: 0, 
    name: "", 
    costPerHour: 0, 
    directPayment: 0, 
    personalIncomeTax: 0,
    insurancePremiums: 0,
    vacationAllowance: 0,
    qualificationCosts: 0,
    obtainingWorkPermitsCosts: 0,
    consumablesCost: 0,
    crampedConditions: 0,
    regionId: 0,
    region: undefined
}

const mapState = (store: AppStore) => {
    return ({
        modifiedContainerStyle: style.modifiedContainer,
        items: store.workersData.workers,
        defaultItem: defaultItem,
        itemConfig: {id: style.workerId, name: style.workerName, costPerHour: style.workerNum, directPayment: style.workerNum,
            personalIncomeTax: style.workerNum, insurancePremiums: style.workerNum, vacationAllowance: style.workerNum, qualificationCosts: style.workerNum, 
            obtainingWorkPermitsCosts: style.workerNum, consumablesCost: style.workerNum, crampedConditions: style.workerNum, regionId: style.workerNum},
        panelConfig: {id: style.workerId, name: style.workerNameInput, costPerHour: style.workerNumInput, directPayment: style.workerNumInput,
            personalIncomeTax: style.workerNumInput, insurancePremiums: style.workerNumInput, vacationAllowance: style.workerNumInput, qualificationCosts: style.workerNumInput, 
            obtainingWorkPermitsCosts: style.workerNumInput, consumablesCost: style.workerNumInput, crampedConditions: style.workerNumInput, regionId: style.workerNumInput}
    });
}

const mapActions ={
    createItem: createWorker,
    getItems: getWorkers,
    editItem: editWorker,
    deleteItem: deleteWorker
};

class WorkerContainer extends Table<WorkerInfo, WorkerRequest> {}
export default connect(mapState, mapActions)(WorkerContainer);