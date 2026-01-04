import { Country } from '../entities/country';
import { League } from '../entities/league';
import { Season } from '../entities/season';

export type LeagueListItem = League & {
    currentseason?: Pick<Season, 'id'>;
    country?: Country;
};

export type SeasonsByLeague = League & {
    seasons?: Season;
    currentseason?: Season;
};
