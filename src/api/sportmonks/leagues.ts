import {
    LeagueListItem,
    SeasonsByLeague,
} from '../../types/sportmonks/endpoints/league';
import { SportMonksResponse } from '../../types/sportmonks/response/response';
import FootballClient from './client';

export const fetchAllLeagues = () => {
    return FootballClient<SportMonksResponse<LeagueListItem[]>>({
        url: '/leagues',
        params: {
            include: 'currentSeason;country:name,image_path',
            select: 'id,name,short_code,type,active,country_id,sub_type,image_path',
        },
    });
};

export const fetchAllSeasonsByLeagueId = (leagueId: number) => {
    return FootballClient<SportMonksResponse<SeasonsByLeague[]>>({
        url: `/leagues/${leagueId}`,
        params: {
            include: 'seasons;currentseason;country',
        },
    });
};
