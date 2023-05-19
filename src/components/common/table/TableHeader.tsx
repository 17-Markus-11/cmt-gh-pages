import { Component, ReactNode } from "react";
import style from './Table.module.css';
import { Dictionary } from "@reduxjs/toolkit";
import { mapConfig } from "../../../utils/helpers/map-helper";
import Localization from "../../../utils/localization/localization";

type Props = {
    config: Dictionary<string>
}

class TableHeader extends Component<Props> {
    private localization = Localization.getLocalization("table");

    shouldComponentUpdate(): boolean {
        return false; // static component, do not re-render
    }

    render(): ReactNode  {
        return (
            <div className={style.itemContainer}>
                {
                    mapConfig(this.props.config).map(config => 
                        <div key={config.value} className={`${config.className} ${style.tableHeader}`}> 
                            <b>{this.localization(config.value)}</b> 
                        </div>)
                }
                <div className={style.button} />
                <div className={style.button} />
            </div>
        );
    }
}

export default TableHeader;