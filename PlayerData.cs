using System.Collections.Generic;
using System.Text.Json;
using System.Text.Json.Serialization;



public class PlayerData
{
    public List<Skill> Skills { get; set; } = new List<Skill>();
    public List<Activity> Activities { get; set; } = new List<Activity>();
}
public class Skill
{
    [JsonPropertyName("id")]
    public int Id { get; set; }
    [JsonPropertyName("name")]
    public string? Name { get; set; }
    [JsonPropertyName("rank")]
    public int Rank { get; set; }
    [JsonPropertyName("level")]
    public int Level { get; set; }
    [JsonPropertyName("xp")]
    public int Xp { get; set; }
}
public class Activity
{
    [JsonPropertyName("id")]
    public int Id { get; set; }
    [JsonPropertyName("name")]
    public string? Name { get; set; }
    [JsonPropertyName("rank")]
    public int Rank { get; set; }
    [JsonPropertyName("score")]
    public int Score { get; set; }
}
