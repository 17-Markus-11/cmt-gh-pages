import { Component, ReactNode } from "react";
import style from "./Smtr.module.css";
import { RouteComponentProps } from "react-router-dom";
import { SmtrItemInfo } from "./SmtrContainer";
import Localization from "../../utils/localization/localization";

type Props = {
    getSmtr: (id: number) => void,
    items: Array<SmtrItemInfo>
}

type RouteParams = {
    id: string
}

class Smtr extends Component<Props & RouteComponentProps<RouteParams>> {   
    projectId = Number(this.props.match.params.id); 
    localization = Localization.getLocalization("smtr");

    componentDidMount() {
        this.props.getSmtr(this.projectId);
    }

    render(): ReactNode {
        return (
            <div className={style.smtrContainer}>
                <div className={style.smtrHeader}>
                    <div className={style.item} style={{width: 50}}>
                        <span>{this.localization("index")}</span>
                    </div>
                    <div className={style.item} style={{width: 50}}>
                        <span>{this.localization("stage")}</span>
                    </div>
                    <div className={style.item} style={{width: 50}}>
                        <span>{this.localization("title")}</span>
                    </div>
                    <div className={style.item} style={{width: 300}}>
                        <span>{this.localization("titleName")}</span>
                    </div>
                    <div className={style.item} style={{width: 50}}>
                        <span>{this.localization("brand")}</span>
                    </div>
                    <div className={style.item} style={{width: 170}}>
                        <span>{this.localization("techSpecCode")}</span>
                    </div>
                    <div className={style.item} style={{width: 70}}>
                        <span>{this.localization("revision")}</span>
                    </div>
                    <div className={style.item} style={{width: 200}}>
                        <span>{this.localization("constructive")}</span>
                    </div>
                    <div className={style.item} style={{width: 70}}>
                        <span>{this.localization("position")}</span>
                    </div>
                    <div className={style.item} style={{width: 200}}>
                        <span>{this.localization("techName")}</span>
                    </div>
                    <div className={style.item} style={{width: 200}}>
                        <span>{this.localization("docType")}</span>
                    </div>
                    <div className={style.item} style={{width: 80}}>
                        <span>{this.localization("code")}</span>
                    </div>
                    <div className={style.item} style={{width: 150}}>
                        <span>{this.localization("manufacturer")}</span>
                    </div>
                    <div className={style.item} style={{width: 60}}>
                        <span>{this.localization("units")}</span>
                    </div>
                    <div className={style.item} style={{width: 80}}>
                        <span>{this.localization("quantityInProject")}</span>
                    </div>
                    <div className={style.item} style={{width: 80}}>
                        <span>{this.localization("mass")}</span>
                    </div>
                    <div className={style.item} style={{width: 200}}>
                        <span>{this.localization("note")}</span>
                    </div>
                    <div className={style.item} style={{width: 100}}>
                        <span>{this.localization("consumptionRate")}</span>
                    </div>
                    <div className={style.item} style={{width: 150}}>
                        <span>{this.localization("consumptionQuantity")}</span>
                    </div>
                    <div className={style.item} style={{width: 150}}>
                        <span>{this.localization("resourceType")}</span>
                    </div>
                    <div className={style.item} style={{width: 120}}>
                        <span>{this.localization("delivery")}</span>
                    </div>
                    <div className={style.item} style={{width: 110}}>
                        <span>{this.localization("pricePerUnit")}</span>
                    </div>
                    <div className={style.item} style={{width: 110}}>
                        <span>{this.localization("cost")}</span>
                    </div>
                    <div className={style.item} style={{width: 150}}>
                        <span>{this.localization("workCode")}</span>
                    </div>
                    <div className={style.item} style={{width: 400}}>
                        <span>{this.localization("workName")}</span>
                    </div>
                    <div className={style.item} style={{width: 60}}>
                        <span>{this.localization("units")}</span>
                    </div>
                    <div className={style.item} style={{width: 60}}>
                        <span>{this.localization("coeficient")}</span>
                    </div>
                    <div className={style.item} style={{width: 80}}>
                        <span>{this.localization("quantity")}</span>
                    </div>
                </div>
                {
                    this.props.items.map(item => <SmtrItem key={item.id} item={item} />)
                }
            </div>
        );
    }
}

type Props1 = {
    item: SmtrItemInfo
}

class SmtrItem extends Component<Props1> {
    render(): ReactNode {
        const item = this.props.item;

        return (
            <div className={style.smtrItem}>
                <div className={style.item} style={{width: 50}}>
                    <span>{item.index}</span>
                </div>
                <div className={style.item} style={{width: 50}}>
                    <span>{item.stage}</span>
                </div>
                <div className={style.item} style={{width: 50}}>
                    <span>{item.title}</span>
                </div>
                <div className={style.item} style={{width: 300}}>
                    <span>{item.titleName}</span>
                </div>
                <div className={style.item} style={{width: 50}}>
                    <span>{item.brand}</span>
                </div>
                <div className={style.item} style={{width: 170}}>
                    <span>{item.techSpecCode}</span>
                </div>
                <div className={style.item} style={{width: 70}}>
                    <span>{item.revision}</span>
                </div>
                <div className={style.item} style={{width: 200}}>
                    <span>{item.constructive}</span>
                </div>
                <div className={style.item} style={{width: 70}}>
                    <span>{item.position}</span>
                </div>
                <div className={style.item} style={{width: 200}}>
                    <span>{item.techName}</span>
                </div>
                <div className={style.item} style={{width: 200}}>
                    <span>{item.docType}</span>
                </div>
                <div className={style.item} style={{width: 80}}>
                    <span>{item.code}</span>
                </div>
                <div className={style.item} style={{width: 150}}>
                    <span>{item.manufacturer}</span>
                </div>
                <div className={style.item} style={{width: 60}}>
                    <span>{item.units}</span>
                </div>
                <div className={style.item} style={{width: 80}}>
                    <span>{item.quantityInProject}</span>
                </div>
                <div className={style.item} style={{width: 80}}>
                    <span>{item.mass}</span>
                </div>
                <div className={style.item} style={{width: 200}}>
                    <span>{item.note}</span>
                </div>
                <div className={style.item} style={{width: 100}}>
                    <span>{item.consumptionRate}%</span>
                </div>
                <div className={style.item} style={{width: 150}}>
                    <span>{item.consumptionQuantity}</span>
                </div>
                <div className={style.item} style={{width: 150}}>
                    <span>{item.resourceType}</span>
                </div>
                <div className={style.item} style={{width: 120}}>
                    <span>{item.delivery}</span>
                </div>
                <div className={style.item} style={{width: 110}}>
                    <span>{item.pricePerUnit}</span>
                </div>
                <div className={style.item} style={{width: 110}}>
                    <span>{item.cost}</span>
                </div>
                <div className={style.item} style={{width: 150}}>
                    <span>{item.workCode}</span>
                </div>
                <div className={style.item} style={{width: 400}}>
                    <span>{item.workName}</span>
                </div>
                <div className={style.item} style={{width: 60}}>
                    <span>{item.workUnits}</span>
                </div>
                <div className={style.item} style={{width: 60}}>
                    <span>{item.coeficient}</span>
                </div>
                <div className={style.item} style={{width: 80}}>
                    <span>{item.quantity}</span>
                </div>
            </div>
        );
    }
}

export default Smtr;