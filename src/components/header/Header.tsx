import { Component } from "react";
import style from './Header.module.css';
import Module from "../module/Module";
import { ModuleInfo } from "../../store/types/menu/ModuleInfo";

type Props = {
    menuItems: Array<ModuleInfo>
}

class Header extends Component<Props> {
    render() {
        return (
            <header className={style.header}>
                {
                    this.props.menuItems.map(item => <Module key={item.name} link={item.link} name={item.name} />)
                }
            </header>
        );
    }
}

export default Header;
