import { SeasonTopscorerItem } from '../../types/sportmonks/endpoints/topscorers';
import { SportMonksResponse } from '../../types/sportmonks/response/response';
import FootballClient from './client';

export const fetchTopScorersByType = async (
    seasonId: number,
    eventType: number
) => {
    return FootballClient<SportMonksResponse<SeasonTopscorerItem[]>>({
        url: `/topscorers/seasons/${seasonId}`,
        params: {
            include:
                'player.nationality:name;player.position:name;participant:name,image_path;player:display_name,image_path;type',
            filters: `seasontopscorerTypes:${eventType}`,
        },
    });
};
