import { PlayerDetails } from './playerDetails';

export type PlayerStatistic = {
    id: number;
    player_id: number;
    team_id: number;
    season_id: number;
    position_id: number;
    jersey_number: number | null;
    has_values: boolean;
    details: PlayerDetails[];
};
