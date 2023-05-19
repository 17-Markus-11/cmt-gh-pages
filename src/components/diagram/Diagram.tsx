import { Component } from "react";
import style from './Diagram.module.css';
import { HiChevronDown, HiChevronRight } from "react-icons/hi";
import { ChartItemInfo } from "../../store/types/chart/ChartItemInfo";

type Props = {
    items: Array<ChartItemInfo>
}

class Diagram extends Component<Props> {
    render() {
        return (
            <div className={style.container}>
                <div className={style.structure}>
                    <div className={style.structureHeader}>
                        <div className={style.structureHeaderItem}><b>Group</b></div>
                        <div className={style.structureHeaderItemName}><b>Name</b></div>
                        <div className={style.structureHeaderItem}><b>Start</b></div>
                        <div className={style.structureHeaderItem}><b>End</b></div>
                    </div>
                    <div className={style.structureData}>
                        <div className={style.structureDataItem}>
                            <div className={style.sdiGroup}><HiChevronDown /></div>
                            <div className={style.sdiName}>Титул 1</div>
                            <div className={style.sdiDate}>
                                <div>12.05.23</div>
                                <div>28.05.23</div>
                            </div>
                            <div className={style.sdiDate}>
                                <div>27.02.24</div>
                                <div>03.05.24</div>
                            </div>
                        </div>
                        <div className={style.structureDataItem}>
                            <div className={style.sdiGroup}><HiChevronRight /></div>
                            <div className={style.sdiName}>Работа 1</div>
                            <div className={style.sdiDate}>
                                <div>12.05.23</div>
                                <div>28.05.23</div>
                            </div>
                            <div className={style.sdiDate}>
                                <div>25.07.23</div>
                                <div>05.08.23</div>
                            </div>
                        </div>
                        <div className={style.structureDataItem}>
                            <div className={style.sdiGroup}><HiChevronRight /></div>
                            <div className={style.sdiName}>Работа 2</div>
                            <div className={style.sdiDate}>
                                <div>26.07.23</div>
                                <div>06.08.23</div>
                            </div>
                            <div className={style.sdiDate}>
                                <div>27.02.24</div>
                                <div>03.05.24</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.chart}>
                    <div className={style.chartHeader}>
                        <div className={style.chartHeaderItem}>
                            <div className={style.chartHeaderTop}><b>2023</b></div>
                            <div className={style.chartHeaderBottom}>
                                <div className={style.chartHeaderBottomItem}>Jan</div>
                                <div className={style.chartHeaderBottomItem}>Feb</div>
                                <div className={style.chartHeaderBottomItem}>Mar</div>
                                <div className={style.chartHeaderBottomItem}>Apr</div>
                                <div className={style.chartHeaderBottomItem}>May</div>
                                <div className={style.chartHeaderBottomItem}>Jun</div>
                                <div className={style.chartHeaderBottomItem}>Jul</div>
                                <div className={style.chartHeaderBottomItem}>Aug</div>
                                <div className={style.chartHeaderBottomItem}>Sep</div>
                                <div className={style.chartHeaderBottomItem}>Oct</div>
                                <div className={style.chartHeaderBottomItem}>Nov</div>
                                <div className={style.chartHeaderBottomItem}>Dec</div>
                            </div>                            
                        </div>
                        <div className={style.chartHeaderItem}>
                            <div className={style.chartHeaderTop}><b>2024</b></div>
                            <div className={style.chartHeaderBottom}>
                                <div className={style.chartHeaderBottomItem}>Jan</div>
                                <div className={style.chartHeaderBottomItem}>Feb</div>
                                <div className={style.chartHeaderBottomItem}>Mar</div>
                                <div className={style.chartHeaderBottomItem}>Apr</div>
                                <div className={style.chartHeaderBottomItem}>May</div>
                                <div className={style.chartHeaderBottomItem}>Jun</div>
                                <div className={style.chartHeaderBottomItem}>Jul</div>
                                <div className={style.chartHeaderBottomItem}>Aug</div>
                                <div className={style.chartHeaderBottomItem}>Sep</div>
                                <div className={style.chartHeaderBottomItem}>Oct</div>
                                <div className={style.chartHeaderBottomItem}>Nov</div>
                                <div className={style.chartHeaderBottomItem}>Dec</div>
                            </div>                            
                        </div>
                        <div className={style.chartHeaderItem}>
                            <div className={style.chartHeaderTop}><b>2025</b></div>
                            <div className={style.chartHeaderBottom}>
                                <div className={style.chartHeaderBottomItem}>Jan</div>
                                <div className={style.chartHeaderBottomItem}>Feb</div>
                                <div className={style.chartHeaderBottomItem}>Mar</div>
                                <div className={style.chartHeaderBottomItem}>Apr</div>
                                <div className={style.chartHeaderBottomItem}>May</div>
                                <div className={style.chartHeaderBottomItem}>Jun</div>
                                <div className={style.chartHeaderBottomItem}>Jul</div>
                                <div className={style.chartHeaderBottomItem}>Aug</div>
                                <div className={style.chartHeaderBottomItem}>Sep</div>
                                <div className={style.chartHeaderBottomItem}>Oct</div>
                                <div className={style.chartHeaderBottomItem}>Nov</div>
                                <div className={style.chartHeaderBottomItem}>Dec</div>
                            </div>                            
                        </div>
                        <div className={style.chartHeaderItem}>
                            <div className={style.chartHeaderTop}><b>2026</b></div>
                            <div className={style.chartHeaderBottom}>
                                <div className={style.chartHeaderBottomItem}>Jan</div>
                                <div className={style.chartHeaderBottomItem}>Feb</div>
                                <div className={style.chartHeaderBottomItem}>Mar</div>
                                <div className={style.chartHeaderBottomItem}>Apr</div>
                                <div className={style.chartHeaderBottomItem}>May</div>
                                <div className={style.chartHeaderBottomItem}>Jun</div>
                                <div className={style.chartHeaderBottomItem}>Jul</div>
                                <div className={style.chartHeaderBottomItem}>Aug</div>
                                <div className={style.chartHeaderBottomItem}>Sep</div>
                                <div className={style.chartHeaderBottomItem}>Oct</div>
                                <div className={style.chartHeaderBottomItem}>Nov</div>
                                <div className={style.chartHeaderBottomItem}>Dec</div>
                            </div>                            
                        </div>
                        <div className={style.chartHeaderItem}>
                            <div className={style.chartHeaderTop}><b>2027</b></div>
                            <div className={style.chartHeaderBottom}>
                                <div className={style.chartHeaderBottomItem}>Jan</div>
                                <div className={style.chartHeaderBottomItem}>Feb</div>
                                <div className={style.chartHeaderBottomItem}>Mar</div>
                                <div className={style.chartHeaderBottomItem}>Apr</div>
                                <div className={style.chartHeaderBottomItem}>May</div>
                                <div className={style.chartHeaderBottomItem}>Jun</div>
                                <div className={style.chartHeaderBottomItem}>Jul</div>
                                <div className={style.chartHeaderBottomItem}>Aug</div>
                                <div className={style.chartHeaderBottomItem}>Sep</div>
                                <div className={style.chartHeaderBottomItem}>Oct</div>
                                <div className={style.chartHeaderBottomItem}>Nov</div>
                                <div className={style.chartHeaderBottomItem}>Dec</div>
                            </div>                            
                        </div>
                    </div>
                    <div className={style.chartData}>
                        <div className={style.chartDataItemContainer}>
                            <div className={style.chartDataItem}>
                                <div style={{width: "200px"}}/>
                                <div className={style.chartDataItemGreen} style={{width: "400px"}}/>
                            </div>
                            <div className={style.chartDataItem}>
                                <div style={{width: "220px"}}/>
                                <div className={style.chartDataItemBlue} style={{width: "400px"}}/>
                            </div>
                        </div>
                        <div className={style.chartDataItemContainer}>
                            <div className={style.chartDataItem}>
                                <div style={{width: "200px"}}/>
                                <div className={style.chartDataItemGreen} style={{width: "100px"}}/>
                            </div>
                            <div className={style.chartDataItem}>
                                <div style={{width: "220px"}}/>
                                <div className={style.chartDataItemBlue} style={{width: "100px"}}/>
                            </div>
                        </div>
                        <div className={style.chartDataItemContainer}>
                            <div className={style.chartDataItem}>
                                <div style={{width: "300px"}}/>
                                <div className={style.chartDataItemGreen} style={{width: "300px"}}/>
                            </div>
                            <div className={style.chartDataItem}>
                                <div style={{width: "320px"}}/>
                                <div className={style.chartDataItemBlue} style={{width: "300px"}}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Diagram;
