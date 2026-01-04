import { League } from '../entities/league';
import { Season } from '../entities/season';
import { SeasonStatistic } from '../entities/seasonStatistics';

export type SeasonDetail = Season & {
    leagues?: League;
    statistics?: SeasonStatistic[];
};
