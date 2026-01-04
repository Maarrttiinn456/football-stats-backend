import {
    TeamLatestMatches,
    TeamsListItem,
    TeamUpcomingMatches,
} from '../../types/sportmonks/endpoints/teams';
import { SportMonksResponse } from '../../types/sportmonks/response/response';
import FootballClient from './client';

export type FetchTeamsBySeasonOptions = {
    select?: string;
    include?: string;
    filters?: string;
};

export const fetchTeamsBySeasonId = (
    seasonId: number,
    options: FetchTeamsBySeasonOptions = {}
) => {
    return FootballClient<SportMonksResponse<TeamsListItem[]>>({
        url: `/teams/seasons/${seasonId}`,
        params: {
            ...(options.select ? { select: options.select } : {}),
            ...(options.include ? { include: options.include } : {}),
            ...(options.filters ? { filters: options.filters } : {}),
        },
    });
};

export const fetchTeamLatestMatches = (teamId: number) => {
    return FootballClient<SportMonksResponse<TeamLatestMatches>>({
        url: `/teams/${teamId}`,
        params: {
            include: 'latest.participants;latest.scores;latest.league',
        },
    });
};

export const fetchTeamUpcomingMatches = (teamId: number) => {
    return FootballClient<SportMonksResponse<TeamUpcomingMatches>>({
        url: `/teams/${teamId}`,
        params: {
            include: 'upcoming.participants;upcoming.league',
        },
    });
};
