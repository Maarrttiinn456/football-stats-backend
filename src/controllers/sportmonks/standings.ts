import { Request, Response } from 'express';
import { fetchStandingsBySeasonId } from '../../api/sportmonks/standings';
import { httpError } from '../../utils/httpError';

export const getSeasonStandings = async (req: Request, res: Response) => {
    const seasonId = Number(req.params.seasonId);

    if (Number.isNaN(seasonId)) {
        throw httpError(400, 'seasonId musí být číslo');
    }

    const response = await fetchStandingsBySeasonId(seasonId);

    res.json({
        ok: true,
        data: response.data,
    });
};
