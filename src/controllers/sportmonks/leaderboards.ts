import { Request, Response } from 'express';
import { leaderboardStatsBySeasonsAndTeams } from '../../services/leaderboards';
import { httpError } from '../../utils/httpError';
import { getTeamsBySeasonId } from '../../services/teamsBySeasonId';

export const getTopCleanSheets = async (req: Request, res: Response) => {
    const seasonId = Number(req.params.seasonId);

    if (Number.isNaN(seasonId)) {
        throw httpError(400, 'seasonId musí být číslo');
    }

    const teamsId = (await getTeamsBySeasonId(seasonId)).map((team) => team.id);

    const data = await leaderboardStatsBySeasonsAndTeams(
        seasonId,
        teamsId,
        ['goalkeeper'],
        [194]
    );

    res.json({
        status: 'ok',
        data: data,
    });
};

export const getBoardsBsedOnEventType = async (req: Request, res: Response) => {
    const seasonId = Number(req.params.seasonId);
    const { eventsType } = req.query;
    const { playerPosition } = req.query;

    if (Number.isNaN(seasonId)) {
        throw httpError(400, 'seasonId musí být číslo');
    }

    if (!eventsType) {
        throw httpError(400, 'eventsType je povinný parametr');
    }

    const eventsTypeArr = String(eventsType).split(',').map(Number);
    const playerPositionArr =
        typeof playerPosition === 'string' && playerPosition.length > 0
            ? playerPosition.split(',')
            : [];

    //console.log(playerPositionArr);

    if (eventsTypeArr.some(Number.isNaN)) {
        throw httpError(400, 'eventsType musí být seznam čísel');
    }

    const teamsId = (await getTeamsBySeasonId(seasonId)).map((team) => team.id);

    const data = await leaderboardStatsBySeasonsAndTeams(
        seasonId,
        teamsId,
        playerPositionArr,
        eventsTypeArr
    );

    res.json({
        status: 'ok',
        data: data,
    });
};
