import { Fixture } from '../entities/fixture';
import { Team } from '../entities/team';
import { TeamStatistic } from '../entities/teamStatistics';

export type TeamsListItem = Team & {
    statistics?: TeamStatistic[];
};

export type TeamUpcomingMatches = Team & {
    upcoming?: Fixture[];
};

export type TeamLatestMatches = Team & {
    latest?: Fixture[];
};
