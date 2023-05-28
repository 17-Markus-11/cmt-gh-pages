import { Component, ReactNode } from "react";
import { RegionInfo } from "../../store/types/region/RegionInfo";
import style from "./Guide.module.css";
import Localization from "../../utils/localization/localization";
import { Redirect } from "react-router-dom";

type Props = {
    regions: Array<RegionInfo>,
    getRegions: (skip: number, take: number) => void,
    uploadUpgFile: (file: File) => void
}

class Guide extends Component<Props> {
    state = {
        selectedFile: null,
        needToRedirect: false
    }

    localization = Localization.getLocalization("upg");

    componentDidMount() {
        this.props.getRegions(0, 10);
    }

    onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (!event.target.files)
            return;

        const file = event.target.files[0];
        this.setState({
            selectedFile: file
        })
    }

    onSubmit = () => {
        if (!this.state.selectedFile)
            return;

        this.props.uploadUpgFile(this.state.selectedFile);

        this.setState({
            selectedFile: null,
            needToRedirect: true
        })
    }

    render(): ReactNode {
        return (
            <div className={style.guideContainer}>
                <div>
                    <h3>{this.localization("loadCustomUpgHeader")}</h3>
                </div>
                <div className={style.guideRegion}>
                    <select required>
                        <option hidden value="">{this.localization("chooseRegion")}:</option>
                        {
                            this.props.regions.map(region => <option key={region.id} value={region.id}>{`[${region.code}]`} {region.name}</option>)
                        }
                    </select>
                </div>
                <div className={style.guideFile}>
                    <input type="file" id="file" onChange={this.onChange} />
                    <label htmlFor="file" className={style.fileLabel}>{this.localization("chooseFile")}</label>
                </div>                
                <div className={style.guideSubmit}>
                    <button onClick={this.onSubmit}>{this.localization("uploadFile")}</button>
                </div>
                {
                    this.state.needToRedirect &&
                        <Redirect to={"/upg"}/>
                }
            </div>
        )
    }
}

export default Guide;