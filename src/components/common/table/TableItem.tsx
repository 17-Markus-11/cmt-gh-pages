import { Component, ReactNode } from "react";
import style from './Table.module.css';
import { HiOutlineX } from 'react-icons/hi';
import { HiPencil } from 'react-icons/hi';
import { mapConfig } from "../../../utils/helpers/map-helper";
import { Dictionary } from "@reduxjs/toolkit";
;

type Props<T> = {
    config: Dictionary<string>,
    info: T,
    onDelete: (id: number) => void,
    openEditMode: (info: T) => void,
}

class TableItem<T extends {id: number}> extends Component<Props<T>> {
    onDelete = (): void => {
        this.props.onDelete(this.props.info.id);
    }

    onEdit = (): void => {
        this.props.openEditMode(this.props.info);
    }

    render(): ReactNode  {
        return (
            <div className={style.itemContainer}>
                {
                    mapConfig(this.props.config).map(config => <div key={config.value} className={config.className}> {(this.props.info as Dictionary<any>)[config.value]} </div>)
                }
                <HiPencil onClick={this.onEdit} />
                <HiOutlineX onClick={this.onDelete} />
            </div>
        );
    }
}

export default TableItem;
