import { Request, Response } from 'express';
import { httpError } from '../../utils/httpError';
import { fetchSchedulesBySeasonId } from '../../api/sportmonks/schedules';

export const getSeasonFixtures = async (req: Request, res: Response) => {
    const seasonId = Number(req.params.seasonId);
    const scope = req.query.scope as
        | 'current-week'
        | 'upcoming'
        | 'past'
        | undefined;

    if (Number.isNaN(seasonId)) {
        throw httpError(400, 'seasonId musí být číslo');
    }

    const response = await fetchSchedulesBySeasonId(seasonId);

    const stages = response.data;

    const rounds = stages.flatMap((stage) => stage.rounds ?? []);

    const filteredRounds =
        scope === 'current-week'
            ? rounds.filter((r) => r.games_in_current_week)
            : scope === 'past'
            ? rounds.filter((r) => r.finished)
            : scope === 'upcoming'
            ? rounds.filter((r) => !r.finished && !r.games_in_current_week)
            : rounds;

    res.json({
        ok: true,
        data: filteredRounds,
    });
};
