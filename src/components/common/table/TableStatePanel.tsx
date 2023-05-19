import { Component, FormEvent, ReactNode } from "react";
import style from './Table.module.css';
import { HiBan, HiCheck } from 'react-icons/hi';
import { mapConfig } from "../../../utils/helpers/map-helper";
import { Dictionary } from "@reduxjs/toolkit";

type Props<TI, TR> = { 
    config: Dictionary<string>,
    info: TI,
    onCancel: () => void,
    onSubmit: (info: TR) => void
}

//TODO: dont extend, just select TR from TI
//TODO: replace any to string | number | ...
class TableStatePanel<TI extends TR, TR extends {} & Dictionary<any>> extends Component<Props<TI, TR>> { 
    state = this.props.info;

    onValueChanged = (name: string)  => (e: FormEvent<HTMLInputElement>): void => {      
        let state: any = {}; //TODO: remove any
        state[name] = e.currentTarget.value;
        this.setState(state);
    }

    onSubmit = (): void => {
        this.props.onSubmit(this.state);
    }

    render(): ReactNode  {        
        return (
            <form className={style.controlPanel} >
                {
                    mapConfig(this.props.config).map(config => 
                        config.value === "id" //TODO: refactor, remove "id"
                            ? <div 
                                key={config.value} 
                                className={config.className}
                            />
                            : <input 
                                key={config.value} 
                                className={config.className} 
                                name={config.value} 
                                value={this.state[config.value]} 
                                onChange={this.onValueChanged(config.value)} 
                            />)
                }
                <HiBan onClick={this.props.onCancel} />
                <HiCheck onClick={this.onSubmit} />
            </form>
        );
    }
}

export default TableStatePanel;