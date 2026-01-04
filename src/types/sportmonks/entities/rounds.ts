import { Fixture } from './fixture';

export type Round = {
    id: number;
    sport_id: number;
    league_id: number;
    season_id: number;
    stage_id: number;

    name: string; // "1", "18", "Quarter-finals"...
    finished: boolean;
    is_current: boolean;

    starting_at: string; // YYYY-MM-DD
    ending_at: string; // YYYY-MM-DD

    games_in_current_week: boolean;

    // include=fixtures
    fixtures?: Fixture[];
};
