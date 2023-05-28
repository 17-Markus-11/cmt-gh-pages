import { connect } from "react-redux";
import { AppStore } from "../../store/redusers/redux-store";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import WorkingGroup from "./WorkingGroup";
import { addWorkingGroupMember, getWorkingGroup } from "../../store/actions/project-actions";

export interface WorkingGroupMemberInfo {
    id: number,
    name: string,
    role: string,
    childs: Array<WorkingGroupMemberInfo>
}

export interface WorkingGroupRequest {
    parentId: number | null,
    name: string,
    role: string
}

const membersTree: WorkingGroupMemberInfo = {
    id: 1,
    name: "Джумшут",
    role: "Нашальнике",
    childs: [
        {
            id: 1,
            name: "Рамшан",
            role: "Почти нашальнике",
            childs: [
                {
                    id: 4,
                    name: "Джумшут Рамшанович",
                    role: "Работяга",
                    childs: []
                },
                {
                    id: 5,
                    name: "Джумшут Рамшанович",
                    role: "Работяга",
                    childs: []
                },
                {
                    id: 6,
                    name: "Джумшут Рамшанович",
                    role: "Работяга",
                    childs: []
                },
                {
                    id: 7,
                    name: "Джумшут Рамшанович",
                    role: "Работяга",
                    childs: []
                },
            ]
        },
        {
            id: 2,
            name: "Рамшан 2",
            role: "Почти нашальнике",
            childs: [
                {
                    id: 8,
                    name: "Джумшут Рамшанович",
                    role: "Работяга",
                    childs: []
                }                
            ]
        },
        {
            id: 3,
            name: "Рамшан 3",
            role: "Почти нашальнике",
            childs: [
                {
                    id: 9,
                    name: "Джумшут Рамшанович",
                    role: "Работяга",
                    childs: []
                },
                {
                    id: 10,
                    name: "Джумшут Рамшанович",
                    role: "Работяга",
                    childs: []
                }                
            ]
        },
        {
            id: 12,
            name: "Рамшан 4",
            role: "Почти нашальнике",
            childs: [
                {
                    id: 13,
                    name: "Джумшут Рамшанович",
                    role: "Работяга",
                    childs: []
                },
                {
                    id: 14,
                    name: "Джумшут Рамшанович",
                    role: "Работяга",
                    childs: []
                },
                {
                    id: 15,
                    name: "Джумшут Рамшанович",
                    role: "Работяга",
                    childs: []
                },
                {
                    id: 16,
                    name: "Джумшут Рамшанович",
                    role: "Работяга",
                    childs: []
                },
                {
                    id: 17,
                    name: "Джумшут Рамшанович",
                    role: "Работяга",
                    childs: []
                }                
            ]
        }
    ]
};

const mapState = (store: AppStore) => {
    return ({
        membersTree: store.projectsData.workingGroup
    });
}

export default compose<React.ComponentType>(
    connect(mapState, {addWorkingGroupMember, getWorkingGroup}),
    withRouter
)(WorkingGroup);