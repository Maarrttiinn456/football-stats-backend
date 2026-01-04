import { Request, Response } from 'express';
import { httpError } from '../../utils/httpError';
import {
    fetchTeamLatestMatches,
    fetchTeamUpcomingMatches,
} from '../../api/sportmonks/teams';

export const getTeamUpcomingMatches = async (req: Request, res: Response) => {
    const teamId = Number(req.params.teamId);

    if (Number.isNaN(teamId)) {
        throw httpError(400, 'TeamId musí být číslo');
    }

    const response = await fetchTeamUpcomingMatches(teamId);

    res.json({
        ok: true,
        data: response.data,
    });
};

export const getTeamLatestMatches = async (req: Request, res: Response) => {
    const teamId = Number(req.params.teamId);

    if (Number.isNaN(teamId)) {
        throw httpError(400, 'TeamId musí být číslo');
    }

    const response = await fetchTeamLatestMatches(teamId);

    res.json({
        ok: true,
        data: response.data,
    });
};
