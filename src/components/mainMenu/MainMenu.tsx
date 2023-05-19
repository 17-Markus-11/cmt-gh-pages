import { Component, ReactNode } from "react";
import style from './MainMenu.module.css';
import Module from "../module/Module";
import Localization from "../../utils/localization/localization";
import React from "react";

type Props = {
    activeModule: string,
    switchToModule: (module: string, id: number | undefined) => void
}

//TODO: init top menu items according to current route
class MainMenu extends Component<Props> {
    localization = Localization.getLocalization("menu");
    mainMenuRef = React.createRef<HTMLDivElement>();
    state = { isMinimized: true };

    componentDidMount() {
        document.addEventListener("mousedown", this.handleClickOutside);
    }
    
    componentWillUnmount() {
        document.removeEventListener("mousedown", this.handleClickOutside);
    }

    handleClickOutside = (event: MouseEvent): void => {
        if (!this.state.isMinimized && !this.mainMenuRef?.current?.contains(event.target as Node)) {
            this.toggleMinimized();
        }
    }

    toggleMinimized = (): void => {
        this.setState({ 
            isMinimized: !this.state.isMinimized 
        }); 
    }

    render(): ReactNode  {
        return (
            <div className={style.mainMenuContainer}  ref={this.mainMenuRef}>
                <div className={style.mainMenuMinimized} onClick={this.toggleMinimized}>
                    <b>{this.localization("mainMenu")}</b>
                </div>

                {
                    !this.state.isMinimized &&
                        <div className={style.mainMenu}>
                            <Module link="/projects" name="projects" onClick={this.props.switchToModule} />
                            <Module link="/tasks" name="tasks" onClick={this.props.switchToModule} />
                            <Module link="/guide" name="guide" onClick={this.props.switchToModule} />
                            <Module link="/counterparties" name="counterparties" onClick={this.props.switchToModule} />
                            <Module link="/" name="" />
                            <Module link="/" name="" />
                            <Module link="/" name="" />
                            <Module link="/contractor" name="contractor" onClick={this.props.switchToModule} />
                            <Module link="/" name="" />
                            <Module link="/" name="" />
                            <Module link="/" name="" />
                            <Module link="/admin" name="admin" onClick={this.props.switchToModule} />
                            <Module link="/" name="" />
                            <Module link="/" name="" />
                            <Module link="/" name="" />
                            <Module link="/" name="" />
                            <Module link="/" name="" />
                            <Module link="/settings" name="settings" onClick={this.props.switchToModule} />
                            <Module link="/instruction" name="instruction" onClick={this.props.switchToModule} />
                        </div>
                }
            </div>
        );
    }
}

export default MainMenu;