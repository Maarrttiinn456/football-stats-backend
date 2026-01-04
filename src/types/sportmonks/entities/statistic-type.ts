export type StatisticType = {
    id: number;
    name: string;
    code: string;
    developer_name: string;
    model_type: 'statistic' | string;
    stat_group: string | null;
};
