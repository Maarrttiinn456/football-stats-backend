import { Stage } from '../entities/stage';
import type { Round } from '../entities/rounds';
import type { Fixture } from '../entities/fixture';

export type RoundWithFixtures = Round & {
    fixtures?: Fixture[];
};

export type StageWithRoundsAndFixtures = Stage & {
    rounds?: RoundWithFixtures[];
};
