using System;

public class SkillInfo
{
    public int Rank { get; set; }
    public int Level { get; set; }
    public int XP { get; set; }
}

public class BossInfo
{
    public int Rank { get; set; }
    public int Score { get; set; }
}

public class ClueInfo
{
    public int Rank { get; set; }
    public int Score { get; set; }
}
public class Player
{
    public string UserName { get; set; }

    public Dictionary<string, SkillInfo> Skills { get; set; } = new();
    public Dictionary<string, BossInfo> Bosses { get; set; } = new();
    public Dictionary<string, ClueInfo> Clues { get; set; } = new();

    public Player(string userName, PlayerData playerData)
    {
        UserName = userName;
        foreach (var skill in playerData.Skills)
        {
            if (skill.Name != null)
            {
                Skills[skill.Name] = new SkillInfo
                {
                    Rank = skill.Rank,
                    Level = skill.Level,
                    XP = skill.Xp
                };

            }
        }
        int collectionsIndex = -1;
        int collectionsIndexTemp = -1;

        foreach (var activity in playerData.Activities)
        {
            if (activity.Name == "Collections Logged")
            {
                collectionsIndexTemp = playerData.Activities.IndexOf(activity);
            }
        }

        for (int i = collectionsIndexTemp + 1; i < playerData.Activities.Count; i++)
        {
            if (playerData.Activities[i].Name?.StartsWith("A") == true)
            {
                collectionsIndex = i;
                break;
            }
        }

        for (int i = collectionsIndex; i < playerData.Activities.Count; i++)
        {
            var activity = playerData.Activities[i];
            if (activity.Name != null)
            {
                Bosses[activity.Name] = new BossInfo
                {

                    Rank = activity.Rank,
                    Score = activity.Score

                };
            }
        }

        foreach (var activity in playerData.Activities)
        {
            if (activity.Name != null && activity.Name.StartsWith("Clue"))
            {
                Clues[activity.Name] = new ClueInfo
                {
                    Rank = activity.Rank,
                    Score = activity.Score

                };
            }
        }


    }

}