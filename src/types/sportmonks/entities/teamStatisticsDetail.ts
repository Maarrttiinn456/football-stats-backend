import { StatisticType } from './statistic-type';

export type TeamStatisticDetailValue = Record<
    string,
    string | number | boolean | null
>;

export type TeamStatisticDetail = {
    id: number;
    team_statistic_id: number;
    type_id: number;
    value: TeamStatisticDetailValue;

    type?: StatisticType;
};
