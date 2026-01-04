import { TeamSquadItem } from '../../types/sportmonks/endpoints/squad';
import { SportMonksResponse } from '../../types/sportmonks/response/response';
import FootballClient from './client';

export const fetachTeamSquadBySeasonAndTeamId = (
    seasonId: number,
    teamnId: number
) => {
    return FootballClient<SportMonksResponse<TeamSquadItem[]>>({
        url: `/squads/seasons/${seasonId}/teams/${teamnId}`,
        params: {
            include:
                'player:display_name,image_path;player.nationality:name,image_path;player.position:id,name,code;team:name,image_path;details.type',
        },
    });
};
