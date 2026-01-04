import { League } from './league';
import type { Participant } from './participant';
import { Score } from './score';

export type Fixture = {
    id: number;
    sport_id: number;
    league_id: number;
    season_id: number;
    stage_id: number;

    group_id: number | null;
    aggregate_id: number | null;
    round_id: number;

    state_id: number;
    venue_id: number | null;

    name: string;
    starting_at: string;
    result_info: string | null;

    leg: string | null;
    details: unknown | null;
    length: number | null;

    placeholder: boolean;
    has_odds: boolean;
    has_premium_odds: boolean;

    starting_at_timestamp: number;

    meta?: {
        location: string;
    };

    // includes
    participants?: Participant[];
    scores?: Score[];
    league?: League;
};
