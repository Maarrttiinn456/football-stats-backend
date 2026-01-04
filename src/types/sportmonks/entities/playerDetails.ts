import { StatisticType } from './statistic-type';

export type PlayerDetailValue = Record<
    string,
    string | number | boolean | null
>;

export type PlayerDetails = {
    id: number;
    player_statistic_id: number;
    type_id: number;
    value: PlayerDetailValue;
    type?: StatisticType;
};
