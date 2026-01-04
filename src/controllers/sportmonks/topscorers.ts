import { Request, Response, NextFunction } from 'express';
import { httpError } from '../../utils/httpError';
import { fetchTopScorersByType } from '../../api/sportmonks/topscorers';

export const getTopScorersByType = async (req: Request, res: Response) => {
    const seasonId = Number(req.params.seasonId);
    const eventType = Number(req.query.eventType);

    if (Number.isNaN(seasonId)) {
        throw httpError(400, 'seasonId musí být číslo');
    }

    if (Number.isNaN(eventType)) {
        throw httpError(400, 'eventType musí být číslo');
    }

    const response = await fetchTopScorersByType(seasonId, eventType);

    res.json({
        status: 'ok',
        data: response.data,
        pagination: response.pagination,
    });
};
