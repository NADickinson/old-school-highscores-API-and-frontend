import type { ApiResponse } from '../../types/api';

export const PlayerTable = ({ playerData }: { playerData: ApiResponse }) => {
  return (
    <details>
      <summary>{'Players Stats'}</summary>
      <div className="shadow-[0_10px_30px_rgba(0,0,0,0.9)] rounded-lg bg-white overflow-hidden m-6">
        <table className="[&_th]:px-4 text-center [&_th]:bg-[#00836A] ">
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
                <tr
                  key={skill.name}
                  className="odd:bg-[#F2F2F2] even:bg-[#FFFFFF]"
                >
                  <td>{skill.name}</td>
                  <td>{skill.level}</td>
                  <td>{skill.xp}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </details>
  );
};
