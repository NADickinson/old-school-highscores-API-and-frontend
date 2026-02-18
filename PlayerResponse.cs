using System;



public class PlayerResponse
{
    public Player Player { get; set; }
    public List<BossReqs> AllBosses { get; set; } = new();
    public List<BossReqs> RecommendedBosses { get; set; } = new();

};