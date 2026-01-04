import express from 'express';
import {
    getAllLeagues,
    getAllSeasonsByLeague,
} from '../controllers/sportmonks/leagues';
import { getTopScorersByType } from '../controllers/sportmonks/topscorers';
import { getBoardsBsedOnEventType } from '../controllers/sportmonks/leaderboards';
import { getSeasonStandings } from '../controllers/sportmonks/standings';
import {
    getSeasonDetail,
    getSeasonHighlights,
    getSeasonTeamStats,
} from '../controllers/sportmonks/seasons';
import { getSeasonFixtures } from '../controllers/sportmonks/schedules';
import {
    getTeamLatestMatches,
    getTeamUpcomingMatches,
} from '../controllers/sportmonks/team';

const footballRouter = express.Router();

/***
-------- Leagues --------
***/
footballRouter.get('/leagues', getAllLeagues);

footballRouter.get('/leagues/:leagueId', getAllSeasonsByLeague);

/***
-------- Seasons --------
***/

//Získání názvu ligy a sezóny
footballRouter.get('/seasons/:seasonId', getSeasonDetail);

// Pomocí parametru typeId ovlivním co si tahám (208,209...)
footballRouter.get('/seasons/:seasonId/topscorers', getTopScorersByType);

footballRouter.get('/seasons/:seasonId/leaderboards', getBoardsBsedOnEventType);

footballRouter.get('/seasons/:seasonId/standings', getSeasonStandings);

//Pomocí typeIds specifikuji co si volám
footballRouter.get('/seasons/:seasonId/highlights', getSeasonHighlights);

//Pomocí typeIds mohi specifikovat jaké statistiky budu tahat. Obvykle budu tahat více než jednu
footballRouter.get('/seasons/:seasonId/team/stats', getSeasonTeamStats);

//Pomocí ?scope='...' budu řídit jakou sortu zápasů dostanu
footballRouter.get('/seasons/:seasonId/fixtures', getSeasonFixtures);

/***
-------- Team --------
***/

footballRouter.get('/teams/:teamId/upcoming-matches', getTeamUpcomingMatches);

footballRouter.get('/teams/:teamId/latest-matches', getTeamLatestMatches);

export default footballRouter;
