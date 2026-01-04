import { PlayerDetails } from '../entities/playerDetails';
import { Player } from '../entities/players';
import { Team } from '../entities/team';

export type TeamSquadItem = {
    id: number;
    player_id: number;
    team_id: number;
    season_id: number;
    has_values: boolean;
    position_id: number;
    player?: Player;
    team?: Team;
    details?: PlayerDetails[];
};

export type SquadTeamPlayerItem = {
    id: number;
    transfer_id: number | null;
    player_id: number;
    team_id: number;
    position_id: number;
    detailed_position_id: number;
    start: string;
    end: string | null;
    captain: boolean;
    jersey_number: number | null;

    team?: Team;
    player: Player;
};
