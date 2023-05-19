export interface ChartItemInfo {
    isGroup: boolean,
    name: string,
    subItems: Array<SubChartItemInfo>
}

export interface SubChartItemInfo {
    code: string,
    start: string,
    end: string
}