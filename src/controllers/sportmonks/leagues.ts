import { Request, Response, NextFunction } from 'express';
import {
    fetchAllLeagues,
    fetchAllSeasonsByLeagueId,
} from '../../api/sportmonks/leagues';
import { httpError } from '../../utils/httpError';

export const getAllLeagues = async (req: Request, res: Response) => {
    const response = await fetchAllLeagues();

    res.json({
        status: 'ok',
        data: response.data,
    });
};

export const getAllSeasonsByLeague = async (req: Request, res: Response) => {
    const leagueId = Number(req.params.leagueId);

    if (Number.isNaN(leagueId)) {
        throw httpError(400, 'LeaguId musí být číslo');
    }

    const response = await fetchAllSeasonsByLeagueId(leagueId);

    res.json({
        ok: true,
        data: response.data,
    });
};
