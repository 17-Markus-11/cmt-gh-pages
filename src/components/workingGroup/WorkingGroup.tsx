import { Component, FormEvent, ReactNode } from "react";
import style from "./WorkingGroup.module.css";
import { WorkingGroupMemberInfo, WorkingGroupRequest } from "./WorkingGroupContainer";
import { RouteComponentProps } from "react-router-dom";
import ModalMenu, { ModalMenuOption } from "../common/modalMenu/ModalMenu";
import { HiCheck } from "react-icons/hi";

type Props = {
    membersTree: WorkingGroupMemberInfo | null,
    addWorkingGroupMember: (projectId: number, request: WorkingGroupRequest) => void,
    getWorkingGroup: (projectId: number) => void
}

type RouteParams = {
    id: string
}

class WorkingGroup extends Component<Props & RouteComponentProps<RouteParams>> {
    state = {
        modalTop: 0,
        modalLeft: 0,
        modalOptions: [] as Array<ModalMenuOption>,
        isModalMenuVisible: false
    };

    projectId = Number(this.props.match.params.id);

    componentDidMount() {
        this.props.getWorkingGroup(this.projectId);

        document.addEventListener("click", this.handleLeftClick);
    }

    addWorkingGroupMember = (request: WorkingGroupRequest) => {
        this.props.addWorkingGroupMember(this.projectId, request);
    }

    onContextMenu = (top: number, left: number, options: Array<ModalMenuOption>) => {
        this.setState({
            modalTop: top,
            modalLeft: left,
            modalOptions: options,
        })
        
        this.turnOnModalMenuVisability();
    }

    handleLeftClick = (event: MouseEvent) => {
        this.turnOffModalMenuVisability();
    }

    turnOnModalMenuVisability = () => {
        this.setState({isModalMenuVisible: true});
    }

    turnOffModalMenuVisability = () => {
        this.setState({isModalMenuVisible: false});
    }

    render(): ReactNode {
        return (
            <div className={style.workingGroupContainer}>
                {
                    this.state.isModalMenuVisible &&
                        <ModalMenu 
                            top={this.state.modalTop} 
                            left={this.state.modalLeft} 
                            options={this.state.modalOptions} />
                }
                {
                    this.props.membersTree &&
                        <WorkingGroupMember
                            onContextMenu={this.onContextMenu}
                            addWorkingGroupMember={this.addWorkingGroupMember}
                            key={this.props.membersTree.id} 
                            member={this.props.membersTree} 
                            level={1} />
                }
                {
                    !this.props.membersTree &&
                        <AddWorkingGroupMember 
                            level={1}
                            addWorkingGroupMember={this.addWorkingGroupMember} 
                            parentId={null} 
                            afterSubmit={() => {}}/>
                }
            </div>
        );
    }
}

type Props2 = {
    level: number,
    parentId: number | null,
    addWorkingGroupMember: (request: WorkingGroupRequest) => void,
    afterSubmit: () => void
}

class AddWorkingGroupMember extends Component<Props2>{
    state = {
        name: "",
        role: ""
    }

    onNameEdit = (event: FormEvent<HTMLInputElement>) => { this.setState({name: event.currentTarget.value}); }

    onRoleEdit = (event: FormEvent<HTMLInputElement>) => { this.setState({role: event.currentTarget.value}); }

    addWorkingGroupMember = () => {        
        var request : WorkingGroupRequest = {
            name: this.state.name,
            role: this.state.role,
            parentId: this.props.parentId
        };

        this.props.addWorkingGroupMember(request);
        this.props.afterSubmit();
    }

    getChildsClassByLevel = (level: number) => {
        return level > 1
            ? style.lowMemberChildsContainer
            : style.topMemberChildsContainer;
    }

    getBorderClassByLevel = (level: number) => {
        if (level === 1)
            return style.topMemberBorder;
        else if (level === 2)
            return style.midMemberBorder;
        else
            return style.lowMemberBorder;
    }

    getMemberClassesByLevel = (level: number) => {
        return level < 3
            ? style.member
            : `${style.member} ${style.lowMember}`;
    }

    render(): ReactNode {
        return (
            <div className={style.memberContainer}>
                {
                    this.props.level > 1 &&
                        <div className={style.verticalBorder}></div>
                }
                <div className={this.getMemberClassesByLevel(this.props.level)}>
                    <form className={style.addMember}>
                        <input 
                            className={style.addMemberInput} 
                            type={"text"} 
                            placeholder={"Введите имя"}
                            value={this.state.name} 
                            onChange={this.onNameEdit} />
                        <input 
                            className={style.addMemberInput} 
                            type={"text"} 
                            placeholder={"Введите должность"}
                            value={this.state.role} 
                            onChange={this.onRoleEdit} />
                        <HiCheck className={style.addMemberButton} onClick={this.addWorkingGroupMember}/>
                    </form>
                </div>
                {
                    this.props.level === 1 &&
                        <div className={style.verticalBorder}></div>

                }
                <div className={this.getBorderClassByLevel(this.props.level)}></div>
            </div>
        );
    }
}

type Props1 = {
    onContextMenu: (top: number, left: number, options: Array<ModalMenuOption>) => void,
    addWorkingGroupMember: (request: WorkingGroupRequest) => void,
    member: WorkingGroupMemberInfo,
    level: number
}

class WorkingGroupMember extends Component<Props1>{
    state = {
        isEditMode: false
    }

    getChildsClassByLevel = (level: number) => {
        return level > 1
            ? style.lowMemberChildsContainer
            : style.topMemberChildsContainer;
    }

    getBorderClassByLevel = (level: number) => {
        if (level === 1)
            return style.topMemberBorder;
        else if (level === 2)
            return style.midMemberBorder;
        else
            return style.lowMemberBorder;
    }

    getMemberClassesByLevel = (level: number) => {
        return level < 3
            ? style.member
            : `${style.member} ${style.lowMember}`;
    }

    onContextMenu = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault();

        const options : Array<ModalMenuOption> = [
            {name: "Добавить", onClick: this.modalMenuOnInsert},
            {name: "Редактировать", onClick: () => {}},
            {name: "Удалить", onClick: () => {}}
        ];

        this.props.onContextMenu(event.pageY, event.pageX, options);
    }

    modalMenuOnInsert = () => {
        this.setState({isEditMode: true});
    }

    afterSubmit = () => {        
        this.setState({isEditMode: false});
    }

    render(): ReactNode {
        const member = this.props.member;
        
        return (
            <div className={style.memberContainer}>
                {
                    this.props.level > 1 &&
                        <div className={style.verticalBorder}></div>
                }
                <div className={this.getMemberClassesByLevel(this.props.level)}  onContextMenu={this.onContextMenu}>
                    <div className={style.memberName}><span>{member.name}</span></div>
                    <div className={style.memberRole}><span>{member.role}</span></div>
                </div>
                {
                    this.props.level === 1 &&
                        <div className={style.verticalBorder}></div>

                }
                <div className={this.getBorderClassByLevel(this.props.level)}></div>
                <div className={this.getChildsClassByLevel(this.props.level)}>
                    {
                        member.childs.length > 0 && 
                            member.childs.map(child => 
                                <WorkingGroupMember
                                    onContextMenu={this.props.onContextMenu}
                                    addWorkingGroupMember={this.props.addWorkingGroupMember}
                                    key={child.id} 
                                    member={child} 
                                    level={this.props.level + 1} />)
                    }
                    {
                        this.state.isEditMode &&
                            <AddWorkingGroupMember 
                                level={this.props.level + 1} 
                                parentId={this.props.member.id} 
                                addWorkingGroupMember={this.props.addWorkingGroupMember} 
                                afterSubmit={this.afterSubmit} />
                    }
                </div>
            </div>
        );
    }
}

export default WorkingGroup;