import { fetchTeamsBySeasonId } from '../api/sportmonks/teams';

export const getTeamsBySeasonId = async (seasonId: number) => {
    const response = await fetchTeamsBySeasonId(seasonId, {
        select: 'id,name,image_path',
    });

    return response.data;
};
