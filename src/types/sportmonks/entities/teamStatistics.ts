import { TeamStatisticDetail } from './teamStatisticsDetail';

export type TeamStatistic = {
    id: number;
    team_id: number;
    season_id: number;
    has_values: boolean;
    details: TeamStatisticDetail[];
};
