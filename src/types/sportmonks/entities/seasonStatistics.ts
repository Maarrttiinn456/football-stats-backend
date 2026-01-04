import { StatisticType } from './statistic-type';

export type SeasonStatisticValue = Record<
    string,
    string | number | boolean | null
>;

export type SeasonStatistic = {
    id: number;
    model_id: number;
    type_id: number;
    relation_id: number;
    value: SeasonStatisticValue;
    type: 'array';
    statistic_type: StatisticType;
};
