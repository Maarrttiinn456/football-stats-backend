import { StandingsListItem } from '../../types/sportmonks/endpoints/standings';
import { SportMonksResponse } from '../../types/sportmonks/response/response';
import FootballClient from './client';

export const fetchStandingsBySeasonId = (seasonId: number) => {
    return FootballClient<SportMonksResponse<StandingsListItem>>({
        url: `/standings/seasons/${seasonId}`,
        params: {
            include: 'participant;rule.type;details.type;form',
        },
    });
};
