import { Component, ReactNode } from "react";
import { RegionInfo } from "../../store/types/region/RegionInfo";
import style from "./Guide.module.css";
import Localization from "../../utils/localization/localization";

type Props = {
    regions: Array<RegionInfo>,
    getRegions: (skip: number, take: number) => void
}

class Guide extends Component<Props> {
    localization = Localization.getLocalization("upg");

    componentDidMount() {
        this.props.getRegions(0, 10);
    }

    changeHandler = (a: any) => {
        console.log(a);        
    }

    handleSubmission = (a: any) => {
        console.log(a);
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
                    <input type="file" id="file" onChange={this.changeHandler} />
                    <label htmlFor="file" className={style.fileLabel}>{this.localization("chooseFile")}</label>
                </div>                
                <div className={style.guideSubmit}>
                    <button onClick={this.handleSubmission}>{this.localization("uploadFile")}</button>
                </div>
            </div>
        )
    }
}

export default Guide;