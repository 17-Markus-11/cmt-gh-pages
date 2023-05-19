import { Component, ReactNode } from "react";
import { ProjectInfo } from "../../store/types/project/ProjectInfo";
import { RouteComponentProps } from "react-router-dom";

type Props = {
    item: ProjectInfo,
    getProjectById: (id: number) => void,
    switchToModule: (name: string, id: number | undefined) => void
}

type RouteParams = {
    id: string
}

class Project extends Component<Props & RouteComponentProps<RouteParams>> {
    componentDidMount(): void {
        const id = Number(this.props.match.params.id);
        if (id) {
            // this.props.getProjectById(id);
        }

        this.props.switchToModule("project", id);
    }

    render(): ReactNode {
        console.log(this.props);
        
        return (
            <div>
            </div>
        )
    }
}

export default Project;