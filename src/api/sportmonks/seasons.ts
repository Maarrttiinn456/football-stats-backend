import { SeasonDetail } from '../../types/sportmonks/endpoints/season';
import { SportMonksResponse } from '../../types/sportmonks/response/response';
import FootballClient from './client';

export const fetchSeasonsStatsByIds = (seasonId: number, metrics: number[]) => {
    return FootballClient<SportMonksResponse<SeasonDetail>>({
        url: `/seasons/${seasonId}`,
        params: {
            include: 'statistics.type;statistics.participant;league',
            filters: `seasonStatisticTypes:${metrics.join(',')}`,
        },
    });
};

export const fetchSeasonsDetails = (seasonId: number) => {
    return FootballClient<SportMonksResponse<SeasonDetail>>({
        url: `/seasons/${seasonId}`,
        params: {
            include: 'league',
        },
    });
};
