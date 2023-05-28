import { Component, ReactNode } from "react";
import style from "./ModalMenu.module.css";

export interface ModalMenuOption {
    name: string,
    onClick: () => void
}

type Props = {
    top: number,
    left: number,
    options: Array<ModalMenuOption>
}

class ModalMenu extends Component<Props> {
    render(): ReactNode {
        let i = 1;
        return (
            <div className={style.modalMenu} style={{top: this.props.top, left: this.props.left}}>
                <span>Меню:</span>
                {
                    this.props.options.map(option => 
                        <div key={i++} className={style.modalMenuOption} onClick={option.onClick}>
                            <span>{option.name}</span>
                        </div>)
                }
            </div>
        );
    }
}

export default ModalMenu;