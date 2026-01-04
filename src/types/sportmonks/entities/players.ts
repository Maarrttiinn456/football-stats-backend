import { Nationality } from './nationality';
import { PlayerStatistic } from './playerStatistic';
import { Position } from './positions';

export type Player = {
    id: number;
    country_id: number;
    sport_id: number;
    city_id: number;
    position_id: number;
    detailed_position_id: number;
    nationality_id: number;
    common_name: string | null;
    firstname: string | null;
    lastname: string | null;
    name: string;
    display_name: string;
    image_path: string;

    height: number | null;
    weight: number | null;
    date_of_birth: string | null;
    gender: 'male' | 'female' | string;

    nationality?: Nationality;
    statistics?: PlayerStatistic;
    position?: Position;
};
