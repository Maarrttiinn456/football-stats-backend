export type Stage = {
    id: number;
    sport_id: number;
    league_id: number;
    season_id: number;
    type_id: number;
    name: string;
    sort_order: number;
    finished: boolean;
    is_current: boolean;
    starting_at: string;
    ending_at: string;
    games_in_current_week: boolean;
    tie_breaker_rule_id: number | null;
};
