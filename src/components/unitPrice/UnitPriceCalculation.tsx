import { Component, ReactNode } from "react";
import { UnitPriceItem } from "./UnitPriceContainer";
import { RouteComponentProps } from "react-router-dom";
import style from './UnitPrice.module.css';
import Table from "../common/table/Table";
import { UnitPriceResourceInfo, UnitPriceSpecificationInfo } from "./UnitPriceCalculationContainer";

type Props = {
    item: UnitPriceItem,
    resourceItems: UnitPriceResourceInfo[],
    specificationItems: UnitPriceSpecificationInfo[],
    getUnitPriceById: (id: number) => void
}

type RouteParams = {
    id: string
}

class UnitPriceCalculation extends Component<Props & RouteComponentProps<RouteParams>> {
    componentDidMount(): void {
        const id = Number(this.props.match.params.id);
        if (id) {
            // this.props.getUnitPriceById(id);
        }
    }

    render(): ReactNode {
        const item = this.props.item;
        return (
            <div className={style.unitPriceContainer}>
                <div>
                    <h3>Калькуляция затрат единичной расценки</h3>
                </div>
                <div className={style.unitPriceExpenses}>
                    <div className={style.upeHeader}>
                        <div className={style.upeHeaderTitle}>
                            <span>Сводка затрат</span>
                        </div>
                        <div className={style.upeHeaderCalculation}>
                            <span>Калькуляция</span>
                        </div>
                    </div>
                    <div className={style.upeSummary}>
                        <div className={style.upeSummaryHeader}>
                            <div className={style.upeSummaryCode}>Шифр ЕР</div>
                            <div className={style.upeSummaryName}>Наименование ЕР</div>
                            <div className={style.upeSummaryUnits}>Ед.изм.</div>
                            <div className={style.upeSummaryWorkerLaborCost}>ТЗР, чел.-час.</div>
                            <div className={style.upeSummaryMachineLaborCost}>ТЗМ, маш.-час.</div>
                        </div>
                        <div className={style.upeSummaryData}>
                            <div className={style.upeSummaryCode}>{item.code}</div>
                            <div className={style.upeSummaryName}>{item.name}</div>
                            <div className={style.upeSummaryUnits}>{item.unit?.code}</div>
                            <div className={style.upeSummaryWorkerLaborCost}>{0}</div>
                            <div className={style.upeSummaryMachineLaborCost}>{0}</div>
                        </div>
                    </div>
                    <div className={style.spacer}></div>
                    <div className={style.upeSummary}>
                        <div className={style.upeSummaryHeader}>
                            <div className={style.upeSummaryCode}>№ п/п</div>
                            <div className={style.upeSummaryName}>Наименование ресурса</div>
                            <div className={style.upeSummaryUnits}>Тип ресурса</div>
                            <div className={style.upeSummaryWorkerLaborCost}>ТЗР</div>
                            <div className={style.upeSummaryMachineLaborCost}>ТЗМ</div>
                        </div>
                        {
                            this.props.resourceItems.map(resource =>                         
                                <div className={style.upeSummaryData}>
                                    <div className={style.upeSummaryCode}>{resource.index}</div>
                                    <div className={style.upeSummaryName}>{resource.name}</div>
                                    <div className={style.upeSummaryUnits}>{resource.type}</div>
                                    <div className={style.upeSummaryWorkerLaborCost}>{resource.workerLaborCostPerHour}</div>
                                    <div className={style.upeSummaryMachineLaborCost}>{resource.machineLaborCostPerHour}</div>
                                </div>)
                        }
                    </div>
                </div>
                <div className={style.unitPriceSpecification}>
                    <div className={style.unitPriceSpecificationHeader}>
                        <span>1. Описательная часть</span>
                    </div>
                    <div className={style.upeSummary}>
                        <div className={style.upeSummaryHeader}>
                            <div className={style.upsCode}>Код</div>
                            <div className={style.upsName}>Название</div>
                            <div className={style.upsDescription}>Описание</div>
                        </div>
                        {
                            this.props.specificationItems.map(specification =>                         
                                <div className={style.upeSummaryData}>
                                    <div className={style.upsCode}>{specification.index}</div>
                                    <div className={style.upsName}>{specification.name}</div>
                                    <div className={style.upsDescription}>{specification.description}</div>
                                </div>)
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default UnitPriceCalculation;