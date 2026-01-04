import type { Country } from '../entities/country';
import type { Participant } from '../entities/participant';
import { Player } from '../entities/players';
import { Position } from '../entities/positions';
import type { StatisticType } from '../entities/statistic-type';

export type SeasonTopscorerItem = {
    id: number;
    season_id: number;
    player_id: number;
    participant_id: number;
    type_id: number;
    position: number;
    total: number;

    player?: Player & {
        nationality?: Pick<Country, 'id' | 'continent_id' | 'name'>;
        position?: Pick<Position, 'id' | 'name'>;
    };

    participant?: Pick<Participant, 'name' | 'image_path'>;

    type?: StatisticType;
};
