import { Component, ReactNode } from "react";
import style from "./Structure.module.css";
import { RouteComponentProps } from "react-router-dom";
import { StructureItemInfo } from "./StructureContainer";
import Localization from "../../utils/localization/localization";

type Props = {
    getStructure: (id: number) => void,
    items: Array<StructureItemInfo>
}

type RouteParams = {
    id: string
}

class Structure extends Component<Props & RouteComponentProps<RouteParams>> {   
    projectId = Number(this.props.match.params.id); 
    localization = Localization.getLocalization("structure");

    componentDidMount() {
        this.props.getStructure(this.projectId);
    }

    render(): ReactNode {
        return (
            <div className={style.structureContainer}>
                <div className={style.structureHeader}>
                    <div className={style.item} style={{width: 50}}>
                        <span>{this.localization("title")}</span>
                    </div>
                    <div className={style.item} style={{width: 300}}>
                        <span>{this.localization("name")}</span>
                    </div>
                    <div className={style.item} style={{width: 50}}>
                        <span>{this.localization("mark")}</span>
                    </div>
                    <div className={style.item} style={{width: 170}}>
                        <span>{this.localization("code")}</span>
                    </div>
                    <div className={style.item} style={{width: 120}}>
                        <span>{this.localization("type")}</span>
                    </div>
                    <div className={style.item} style={{width: 120}}>
                        <span>{this.localization("date")}</span>
                    </div>
                </div>
                {
                    this.props.items.map(item => <StructureItem key={item.id} item={item} />)
                }
            </div>
        );
    }
}

type Props1 = {
    item: StructureItemInfo
}

class StructureItem extends Component<Props1> {
    render(): ReactNode {
        const item = this.props.item;

        return (
            <div className={style.structureItem}>
                <div className={style.item} style={{width: 50}}>
                    <span>{item.title}</span>
                </div>
                <div className={style.item} style={{width: 300}}>
                    <span>{item.name}</span>
                </div>
                <div className={style.item} style={{width: 50}}>
                    <span>{item.mark}</span>
                </div>
                <div className={style.item} style={{width: 170}}>
                    <span>{item.code}</span>
                </div>
                <div className={style.item} style={{width: 120}}>
                    <span>{item.type}</span>
                </div>
                <div className={style.item} style={{width: 120}}>
                    <span>{item.date}</span>
                </div>
            </div>
        );
    }
}

export default Structure;