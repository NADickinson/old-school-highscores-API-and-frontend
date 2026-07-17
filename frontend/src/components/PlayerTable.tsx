import type { ApiResponse } from '../../types/api';

export const PlayerTable = ({ playerData }: { playerData: ApiResponse }) => {
  return (
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
  );
};
