export type ScoreDescription =
    | '1ST_HALF'
    | '2ND_HALF'
    | 'EXTRA_TIME'
    | 'PENALTIES'
    | 'FULL_TIME';

export type Score = {
    id: number;
    fixture_id: number;
    type_id: number;
    participant_id: number;
    score: {
        goals: number;
        participant: 'home' | 'away';
    };
    description: ScoreDescription;
};
