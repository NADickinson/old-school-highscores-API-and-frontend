public record PlayerBossResponseDto(
    PlayerDto Player,
    List<BossDto> AllBosses,
    List<BossDto> RecommendedBosses
);


public record PlayerDto
(
    string Username,
   List<SkillDto> Skills
);

public record SkillDto(
    string Name,
    int Level,
    int Xp
);

public record BossDto(
    string Name,
    string Location,
    BossRequirementsDto Requirements,
    string? Notes
);

public record BossRequirementsDto(
    List<string> Quests,
    BossStatsDto Stats
);

public record BossStatsDto(
    int Attack,
    int Strength,
    int Defense,
    int Magic,
    int Ranged,
    int Prayer
);
