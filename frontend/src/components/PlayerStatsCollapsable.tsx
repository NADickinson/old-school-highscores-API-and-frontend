import type { ApiResponse } from '../../types/api';

export const PlayerStatsCollapsable = ({
  playerData,
}: {
  playerData: ApiResponse;
}) => {
  return (
    <div>
      <details>
        <summary>{'Players Stats'}</summary>
        <table>
          <thead>
            <tr>
              <th>{'Skill'}</th>
              <th>{'Level'}</th>
              <th>{'XP'}</th>
            </tr>
          </thead>

          <tbody>
            {playerData.player.skills.map((skill) => {
              return (
                <tr key={skill.name}>
                  <td>{skill.name}</td>
                  <td>{skill.level}</td>
                  <td>{skill.xp}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </details>
      <details>
        <summary>{'All Bosses'}</summary>
        <table>
          <thead>
            <tr>
              <th rowSpan={2}>{'Name'}</th>
              <th rowSpan={2}>{'Location'}</th>
              <th rowSpan={2}>{'Quests Needed'}</th>
              <th colSpan={6}>{'Stats Needed'}</th>
              <th rowSpan={2}>{'Important Notes'}</th>
            </tr>

            <tr>
              <th>{'Attack'}</th>
              <th>{'Strength'}</th>
              <th>{'Defense'}</th>
              <th>{'Magic'}</th>
              <th>{'Ranged'}</th>
              <th>{'Prayer'}</th>
            </tr>
          </thead>

          <tbody>
            {playerData.allBosses.map((boss) => {
              return (
                <tr key={boss.name}>
                  <td>{boss.name}</td>
                  <td>{boss.location}</td>
                  <td>{boss.requirements.quests}</td>
                  <td>{boss.requirements.stats.attack}</td>
                  <td>{boss.requirements.stats.strength}</td>
                  <td>{boss.requirements.stats.defense}</td>
                  <td>{boss.requirements.stats.magic}</td>
                  <td>{boss.requirements.stats.ranged}</td>
                  <td>{boss.requirements.stats.prayer}</td>
                  <td>{boss.notes}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </details>
      <details>
        <summary>{'Recommended Bosses'}</summary>
        <table>
          <thead>
            <tr>
              <th rowSpan={2}>{'Name'}</th>
              <th rowSpan={2}>{'Location'}</th>
              <th rowSpan={2}>{'Quests Needed'}</th>
              <th colSpan={6}>{'Stats Needed'}</th>
              <th rowSpan={2}>{'Important Notes'}</th>
            </tr>
          </thead>

          <tbody>
            {playerData.recommendedBosses.map((boss) => {
              return (
                <tr key={boss.name}>
                  <td>{boss.name}</td>
                  <td>{boss.location}</td>
                  <td>{boss.requirements.quests}</td>
                  <td>{boss.requirements.stats.attack}</td>
                  <td>{boss.requirements.stats.strength}</td>
                  <td>{boss.requirements.stats.defense}</td>
                  <td>{boss.requirements.stats.magic}</td>
                  <td>{boss.requirements.stats.ranged}</td>
                  <td>{boss.requirements.stats.prayer}</td>
                  <td>{boss.notes}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </details>
    </div>
  );
};
