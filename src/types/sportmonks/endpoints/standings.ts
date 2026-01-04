import { Participant } from '../entities/participant';
import { StandingDetail } from '../entities/standingDeatil';
import { StandingForm } from '../entities/standingForm';
import { StandingRule } from '../entities/standingRule';

export type StandingsListItem = {
    id: number;
    participant_id: number;
    sport_id: number;
    league_id: number;
    season_id: number;
    stage_id: number;
    group_id: number | null;
    round_id: number;
    standing_rule_id: number;
    position: number;
    result: 'equal' | 'up' | 'down' | null;
    points: number;

    participant?: Participant;
    rule?: StandingRule;
    details?: StandingDetail;
    form?: StandingForm;
};
