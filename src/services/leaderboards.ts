import { fetachTeamSquadBySeasonAndTeamId } from '../api/sportmonks/squads';
import type { TeamSquadItem } from '../types/sportmonks/endpoints/squad';

export const leaderboardStatsBySeasonsAndTeams = async (
    seasonId: number,
    teamsId: number[],
    positionOpt: string[] = [],
    metrics: number[] = []
): Promise<TeamSquadItem[]> => {
    const responses = await Promise.all(
        teamsId.map((teamId) =>
            fetachTeamSquadBySeasonAndTeamId(seasonId, teamId)
        )
    );

    const allPlayers: TeamSquadItem[] = responses.flatMap((r) => r.data);

    const filteredByPosition =
        positionOpt.length > 0
            ? allPlayers.filter((p) => {
                  const code = p.player?.position?.code;
                  return code ? positionOpt.includes(code) : false;
              })
            : allPlayers;

    const filteredByMetrics =
        metrics.length > 0
            ? filteredByPosition.map((p) => ({
                  ...p,
                  details: (p.details ?? []).filter(
                      (d) =>
                          d.type?.id !== undefined &&
                          metrics.includes(d.type.id)
                  ),
              }))
            : filteredByPosition;

    return filteredByMetrics;
};
