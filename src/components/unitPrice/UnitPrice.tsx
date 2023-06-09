import { Component, ReactNode } from "react"
import style from './UnitPrice.module.css';
import { UnitPriceRequest, UnitPriceStatuses, UnitPriceTypes } from "../../store/types/unit-price/UnitPriceRequest";
import { UnitPriceInfo } from "../../store/types/unit-price/UnitPriceInfo";
import { HiChevronDown, HiChevronRight } from 'react-icons/hi';
import Localization from "../../utils/localization/localization";
import { NavLink } from "react-router-dom";

export enum UnitDataSwitchTypes {
    UnitPrices,
    EnlargementLvl1,
    EnlargementLvl2,
    Properties
}

type Props = {
    items: Array<UnitPriceInfo>,
    createUnitPrice: (unitPrice: UnitPriceRequest) => void,
    getUnitPrices: (skip: number, take: number) => void,
    editUnitPrice: (id: number, unitPrice: UnitPriceRequest) => void,
    deleteUnitPrice: (id: number) => void,
}

class UnitPrice extends Component<Props> {
    state = {
        unitDataSwitch: UnitDataSwitchTypes.UnitPrices
    };
    
    localization = Localization.getLocalization("upg");

    componentDidMount() {
        this.props.getUnitPrices(0, 300);
    }

    getLocalizedUnitDataSwitchType = (type: UnitDataSwitchTypes): string => {
        switch (type){
            case UnitDataSwitchTypes.UnitPrices:
                return this.localization("unitPrices");
            case UnitDataSwitchTypes.EnlargementLvl1:
                return this.localization("enlargement1");
            case UnitDataSwitchTypes.EnlargementLvl2:
                return this.localization("enlargement2");
            case UnitDataSwitchTypes.Properties:
                return this.localization("properties");
            default: 
                throw new Error(`Type ${type} is not supported`);
        }
    }

    getSwitchItemClasses = (type: UnitDataSwitchTypes): string => {
        return this.state.unitDataSwitch === type
            ? `${style.controllSwitchItem} ${style.controllSwitchItemActive}`
            : style.controllSwitchItem;
    }

    onControllSwitchClick = (type: UnitDataSwitchTypes) => () => {
        this.setState({
            unitDataSwitch: type
        });
    }

    render(): ReactNode {
        return (            
            <div className={style.upgTopContainer}>
                <div className={style.controllContainer}>
                    <div className={style.controllSwitch}>
                        <div className={this.getSwitchItemClasses(UnitDataSwitchTypes.UnitPrices)} 
                            onClick={this.onControllSwitchClick(UnitDataSwitchTypes.UnitPrices)}>
                            {this.getLocalizedUnitDataSwitchType(UnitDataSwitchTypes.UnitPrices)}
                        </div>
                        <div className={this.getSwitchItemClasses(UnitDataSwitchTypes.EnlargementLvl1)}
                            onClick={this.onControllSwitchClick(UnitDataSwitchTypes.EnlargementLvl1)}>
                            {this.getLocalizedUnitDataSwitchType(UnitDataSwitchTypes.EnlargementLvl1)}
                        </div>
                        <div className={this.getSwitchItemClasses(UnitDataSwitchTypes.EnlargementLvl2)}
                            onClick={this.onControllSwitchClick(UnitDataSwitchTypes.EnlargementLvl2)}>
                            {this.getLocalizedUnitDataSwitchType(UnitDataSwitchTypes.EnlargementLvl2)}
                        </div>
                        <div className={this.getSwitchItemClasses(UnitDataSwitchTypes.Properties)}
                            onClick={this.onControllSwitchClick(UnitDataSwitchTypes.Properties)}>
                            {this.getLocalizedUnitDataSwitchType(UnitDataSwitchTypes.Properties)}
                        </div>
                    </div>
                </div>
                <div className={style.headerContainer}>
                    <div className={style.headerBaseInfo}>
                        <div className={style.headerBaseInfoCode}><span>{this.localization("code")}</span></div>
                        <div className={style.headerBaseInfoName}><span>{this.localization("name")}</span></div>
                        <div className={style.headerBaseInfoUnits}><span>{this.localization("unit")}</span></div>                        
                    </div>
                    {
                        this.state.unitDataSwitch === UnitDataSwitchTypes.UnitPrices &&
                            <div className={style.headerUnitData}>
                                <div className={style.headerUnitDataPrice}>
                                    <span>{this.localization("workerLaborCostPerUnit")}</span>
                                    <span className={style.headerUnitDataPriceUnits}>{this.localization("workerHoursPerUnit")}</span>
                                </div>
                                <div className={style.headerUnitDataPrice}>
                                    <span>{this.localization("machineLaborCostPerUnit")}</span>
                                    <span className={style.headerUnitDataPriceUnits}>{this.localization("machineHoursPerUnit")}</span>
                                </div>
                                <div className={style.headerUnitDataPrice}>
                                    <span>{this.localization("workerPaymentPerHour")}</span>
                                    <span className={style.headerUnitDataPriceUnits}>{this.localization("moneyPerUnit")}</span>
                                </div>
                                <div className={style.headerUnitDataPrice}>
                                    <span>{this.localization("workerPaymentPerUnit")}</span>
                                    <span className={style.headerUnitDataPriceUnits}>{this.localization("moneyPerHour")}</span>
                                </div>
                                <div className={style.headerUnitDataPrice}>
                                    <span>{this.localization("machineOperationCostPerHour")}</span>
                                    <span className={style.headerUnitDataPriceUnits}>{this.localization("moneyPerUnit")}</span>
                                </div>
                                <div className={style.headerUnitDataPrice}>
                                    <span>{this.localization("machineOperationCostPerUnit")}</span>
                                    <span className={style.headerUnitDataPriceUnits}>{this.localization("moneyPerHour")}</span>
                                </div>
                                <div className={style.headerUnitDataPrice}>
                                    <span>{this.localization("directCostPerUnit")}</span>
                                    <span className={style.headerUnitDataPriceUnits}>{this.localization("moneyPerHour")}</span>
                                </div>
                            </div>
                    }
                    {
                        (this.state.unitDataSwitch === UnitDataSwitchTypes.EnlargementLvl1 || this.state.unitDataSwitch === UnitDataSwitchTypes.EnlargementLvl2) &&
                            <div className={style.headerUnitData}>
                                <div className={style.tableEnlargementCode}><span>{this.localization("enlargementCode")}</span></div>
                                <div className={style.tableEnlargementName}><span>{this.localization("enlargementName")}</span></div>
                                <div className={style.tableEnlargementCoef}><span>{this.localization("enlargementCoef")}</span></div>
                            </div>
                    }
                    {
                        this.state.unitDataSwitch === UnitDataSwitchTypes.Properties &&
                            <div className={style.headerUnitData}>
                                <div className={style.headerUnitPropertiesStatus}><span>{this.localization("status")}</span></div>
                                <div className={style.headerUnitPropertiesNote}><span>{this.localization("note")}</span></div>
                            </div>
                    }
                </div>
                <div className={style.upgContainer}>
                    {
                        this.props.items.map(item => <UpgItem key={item.id} item={item} level={0} unitDataSwitch={this.state.unitDataSwitch} />)
                    }
                </div>
            </div>
        )
    }
}

export default UnitPrice;

type Props1 = {
    item: UnitPriceInfo,
    level: number,
    unitDataSwitch: UnitDataSwitchTypes
}

class UpgItem extends Component<Props1> {
    localization = Localization.getLocalization("upg");

    calcMarginLeftByLevel = (type: UnitPriceTypes) => {
        const tabSize = 21;

        return type === UnitPriceTypes.Group 
            ? (3 - this.props.level) * tabSize 
            : (4 - this.props.level) * tabSize;
    }

    getDataClassesByType = (type: UnitPriceTypes, mainClass: string) => {
        return type === UnitPriceTypes.Group
            ? mainClass
            : `${mainClass} ${style.dataBorder}`;
    }

    render(): ReactNode {
        const item = this.props.item;
        return (
            <div className={style.upgItem}>
                {
                    item.type === UnitPriceTypes.Group && 
                        <div className={style.upgItemBorderContainer}>
                            <HiChevronDown className={style.upgItemBorderButton} />
                            <div className={style.upgItemBorder} />
                        </div>
                }
                <div className={style.upgItemContent}>
                    <div style={{marginLeft: this.calcMarginLeftByLevel(item.type)}} className={style.upgItemContentData}>
                        <div className={style.dataContainer}>
                            <div className={this.getDataClassesByType(item.type, style.dataCode)}>
                                {
                                    item.type === UnitPriceTypes.Item
                                        ? <NavLink to={`/upg/${item.id}`} >{item.code}</NavLink>
                                        : <span>{item.code}</span>
                                }
                                
                            </div>
                            <div className={this.getDataClassesByType(item.type, style.dataName)}>
                                <span>{item.name}</span>
                            </div> {/* TODO: highlight full name on hower */}
                            {
                                item.type === UnitPriceTypes.Item &&
                                    <div className={style.tableItem}><span>{item.unit?.code}</span></div>
                            }
                        </div>
                        {
                            item.type === UnitPriceTypes.Item &&
                                <div className={style.tableContainer}>
                                    {
                                        this.props.unitDataSwitch === UnitDataSwitchTypes.UnitPrices &&
                                            <div className={style.table}>
                                                <div className={style.tableItem}><span>{item.workerLaborCostPerUnit}</span></div>
                                                <div className={style.tableItem}><span>{item.machineLaborCostPerUnit}</span></div>
                                                <div className={style.tableItem}><span>{item.workerPaymentPerHour}</span></div>
                                                <div className={style.tableItem}><span>{item.workerPaymentPerUnit}</span></div>
                                                <div className={style.tableItem}><span>{item.machineOperationCostPerHour}</span></div>
                                                <div className={style.tableItem}><span>{item.machineOperationCostPerUnit}</span></div>
                                                <div className={style.tableItem}><span>{item.directCostPerUnit}</span></div>
                                            </div>
                                    }
                                    {
                                        this.props.unitDataSwitch === UnitDataSwitchTypes.EnlargementLvl1 &&
                                            <UnitPriceEnlargement name={item.enlargement1Code} code={item.enlargement1Name} coef={item.enlargement1Coeficient} />
                                    }
                                    {
                                        this.props.unitDataSwitch === UnitDataSwitchTypes.EnlargementLvl2 &&
                                            <UnitPriceEnlargement name={item.enlargement2Code} code={item.enlargement2Name} coef={item.enlargement2Coeficient} />
                                    }
                                    {
                                        this.props.unitDataSwitch === UnitDataSwitchTypes.Properties &&
                                            <UnitPriceProperties status={item.status} note={item.note} />
                                    }
                                </div>
                        }
                    </div>
                    {
                        item.type === UnitPriceTypes.Group && 
                            item.childs.map(child => <UpgItem key={child.id} item={child} level={this.props.level + 1} unitDataSwitch={this.props.unitDataSwitch} />)
                    }
                </div>
            </div>
        )
    }
}

type Props2 = {
    name: string,
    code: string,
    coef: number
}

class UnitPriceEnlargement extends Component<Props2> {
    render(): ReactNode {
        return (
            <div className={style.table}>
                <div className={`${style.tableItem} ${style.tableEnlargementCode}`}><span>{this.props.name}</span></div>
                <div className={`${style.tableItem} ${style.tableEnlargementName}`}><span>{this.props.code}</span></div>
                <div className={`${style.tableItem} ${style.tableEnlargementCoef}`}><span>{this.props.coef}</span></div>
            </div>
        );
    }
}

type Props3 = {
    status: UnitPriceStatuses,
    note: string
}

class UnitPriceProperties extends Component<Props3> {
    localization = Localization.getLocalization("upg");

    getLocalizedUnitPriceStatus = (status: UnitPriceStatuses | undefined): string => {
        switch (status){
            case UnitPriceStatuses.Calculation:
                return this.localization("calculation");
            case UnitPriceStatuses.TemporaryRegulations:
                return this.localization("temporaryRegulations");
            case UnitPriceStatuses.Canceled:
                return this.localization("canceled");
            case UnitPriceStatuses.NoData:
                return this.localization("noData");
            default: 
                throw new Error(`Status ${status} is not supported`);
        }
    }

    render(): ReactNode {
        return (
            <div className={style.table}>
                <div className={`${style.tableItem} ${style.headerUnitPropertiesStatus} ${style.tableUnitPropertiesStatus}`}>
                    <span>{this.getLocalizedUnitPriceStatus(this.props.status)}</span>
                </div>
                <div className={`${style.tableItem} ${style.headerUnitPropertiesNote} ${style.tableUnitPropertiesNote}`}>
                    <span>{this.props.note}</span>
                </div>
            </div>
        );
    }
}

// type Props2 = {
    
// }

// class name extends Component<Props1> {
//     render(): ReactNode {
//         return (
            
//         );
//     }
// }

// type Props2 = {
    
// }

// class name extends Component<Props1> {
//     render(): ReactNode {
//         return (
            
//         );
//     }
// }
