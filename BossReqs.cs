using System;


public class BossReqs
{
    public string Name { get; set; } = "";
    public string Location { get; set; } = "";
    public Requirements Requirements { get; set; } = new Requirements();

    public string Notes { get; set; } = "";



}

public class Requirements
{
    public List<string> Quests { get; set; } = new List<string>();
    public Stats Stats { get; set; } = new Stats();
}

public class Stats
{
    public int Attack { get; set; }
    public int Strength { get; set; }
    public int Defense { get; set; }
    public int Magic { get; set; }
    public int Ranged { get; set; }
    public int Prayer { get; set; }
}




