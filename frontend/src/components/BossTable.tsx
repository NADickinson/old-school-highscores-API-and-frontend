import type { Boss } from '../../types/boss';

export const BossTable = ({
  playerDataBosses,
  title,
}: {
  playerDataBosses: Boss[];
  title: string;
}) => {
  return (
    <details>
      <summary>{title}</summary>
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
          {playerDataBosses.map((boss) => {
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
  );
};
