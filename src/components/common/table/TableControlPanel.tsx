import { Component, ReactNode } from "react";
import style from './Table.module.css';
import { HiOutlineRefresh, HiPlus } from 'react-icons/hi';

type Props = {
    onRefresh: () => void,
    onCreate:() => void
}

class TableControlPanel extends Component<Props> {
    shouldComponentUpdate(): boolean {
        return false; // static component, do not re-render
    }
    
    render(): ReactNode  {        
        return (
            <div className={style.controlPanel}>
                <HiOutlineRefresh onClick={this.props.onRefresh}/>
                <HiPlus onClick={this.props.onCreate} />
            </div>
        );
    }
}

export default TableControlPanel;