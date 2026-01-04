import { StageWithRoundsAndFixtures } from '../../types/sportmonks/endpoints/schedules';
import { SportMonksResponse } from '../../types/sportmonks/response/response';
import FootballClient from './client';

export const fetchSchedulesBySeasonId = (seasonId: number) => {
    return FootballClient<SportMonksResponse<StageWithRoundsAndFixtures[]>>({
        url: `/schedules/seasons/${seasonId}`,
    });
};
