import { Component } from "react";
import style from './Module.module.css';
import { NavLink } from "react-router-dom";
import Localization from "../../utils/localization/localization";

type Props = {
    name: string,
    link: string,
    onClick?: (name: string, id: number | undefined) => void
}

class Module extends Component<Props> {
    private localization = Localization.getLocalization("menu");

    onClick = (): void => {
        if (this.props.onClick)
            this.props.onClick(this.props.name, undefined);
    }

    render() {
        return (
            <div className={style.module} onClick={this.onClick}>
                <NavLink to={this.props.link}>{this.localization(this.props.name)}</NavLink>
            </div>
        );
    }
}

export default Module;
