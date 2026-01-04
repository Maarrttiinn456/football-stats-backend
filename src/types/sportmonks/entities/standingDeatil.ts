import { StatisticType } from './statistic-type';

export type StandingDetail = {
    id: number;
    standing_id: number;
    type_id: number;
    value: number;
    type?: StatisticType;
};
