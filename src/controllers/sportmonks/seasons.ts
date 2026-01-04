import { Request, Response } from 'express';
import { httpError } from '../../utils/httpError';
import {
    fetchSeasonsDetails,
    fetchSeasonsStatsByIds,
} from '../../api/sportmonks/seasons';
import {
    fetchTeamsBySeasonId,
    FetchTeamsBySeasonOptions,
} from '../../api/sportmonks/teams';

export const getSeasonHighlights = async (req: Request, res: Response) => {
    const seasonId = Number(req.params.seasonId);
    const metricsParam = req.query.typeIds;

    if (Number.isNaN(seasonId)) {
        throw httpError(400, 'seasonId musí být číslo');
    }

    if (!metricsParam || typeof metricsParam !== 'string') {
        throw httpError(400, 'metrics musí být string ve tvaru 206,207,212');
    }

    const metrics = metricsParam.split(',').map((m) => Number(m.trim()));

    if (metrics.length === 0) {
        throw httpError(400, 'metrics musí obsahovat alespoň jedno číslo');
    }

    const response = await fetchSeasonsStatsByIds(seasonId, metrics);

    res.json({
        ok: true,
        data: response.data,
    });
};

export const getSeasonTeamStats = async (req: Request, res: Response) => {
    const seasonId = Number(req.params.seasonId);
    const metricsParam = req.query.typeIds;

    if (Number.isNaN(seasonId)) {
        throw httpError(400, 'seasonId musí být číslo');
    }

    if (!metricsParam || typeof metricsParam !== 'string') {
        throw httpError(400, 'metrics musí být string ve tvaru 206,207,212');
    }

    const metrics = metricsParam.split(',').map((m) => Number(m.trim()));

    const options: FetchTeamsBySeasonOptions = {
        include: 'statistics.details.type',
        filters: `teamStatisticSeasons:${seasonId};teamStatisticDetailTypes:${metrics.join(
            ','
        )}`,
    };

    const response = await fetchTeamsBySeasonId(seasonId, options);

    res.json({
        ok: true,
        data: response.data,
    });
};

export const getSeasonDetail = async (req: Request, res: Response) => {
    const seasonId = Number(req.params.seasonId);

    if (Number.isNaN(seasonId)) {
        throw httpError(400, 'seasonId musí být číslo');
    }

    const response = await fetchSeasonsDetails(seasonId);

    res.json({
        ok: true,
        data: response.data,
    });
};
