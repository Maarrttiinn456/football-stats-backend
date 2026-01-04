export type Season = {
    id: number;
    sport_id: number;
    league_id: number;

    tie_breaker_rule_id: number | null;

    name: string;

    finished: boolean;
    pending: boolean;
    is_current: boolean;

    starting_at: string;
    ending_at: string;

    standings_recalculated_at: string | null;
    games_in_current_week: boolean;
};
