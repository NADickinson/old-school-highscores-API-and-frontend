using Newtonsoft.Json;


var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();

app.MapGet("/player/{name}", async (string name) =>
{
    using var client = new HttpClient();

    var url = $"https://secure.runescape.com/m=hiscore_oldschool/index_lite.json?player={name}";

    var response = await client.GetStringAsync(url);

    var playerData = JsonConvert.DeserializeObject<PlayerData>(response);

    if (playerData == null)
    {
        return Results.NotFound("Player not found or invalid response.");
    }

    Player currentPlayer = new Player(name, playerData);

    string jsonText = File.ReadAllText("BossReqsRaw.json");
    List<BossReqs> bossList = JsonConvert.DeserializeObject<List<BossReqs>>(jsonText) ?? new List<BossReqs>();

    if (bossList == null)
    {
        return Results.Problem("Boss JSON failed to deserialize.");
    }

    var recommended = new List<BossReqs>();
    foreach (var boss in bossList)
    {
        var stats = boss.Requirements.Stats;
        if (currentPlayer.Skills["Attack"].Level >= stats.Attack &&
            currentPlayer.Skills["Strength"].Level >= stats.Strength &&
            currentPlayer.Skills["Defence"].Level >= stats.Defense &&
            currentPlayer.Skills["Magic"].Level >= stats.Magic &&
            currentPlayer.Skills["Ranged"].Level >= stats.Ranged &&
            currentPlayer.Skills["Prayer"].Level >= stats.Prayer)
        {
            recommended.Add(boss);
        }
    }

    return Results.Ok(new PlayerResponse
    {
        Player = currentPlayer,
        AllBosses = bossList,
        RecommendedBosses = recommended
    });
});

app.Run();


/* old code from other program.cs
using System;
using System.Net.Http;
using System.Threading.Tasks;
using System.Text.Json;
using Newtonsoft.Json;
class Program
{

    static async Task Main(string[] args)
    {
        Console.WriteLine("Starting OSRS highscores fetch...");

        HttpClient client = new HttpClient();
        Console.WriteLine("Enter OSRS username");
        string? playerName = Console.ReadLine();
        if (!string.IsNullOrWhiteSpace(playerName))
        {
            string url = $"https://secure.runescape.com/m=hiscore_oldschool/index_lite.json?player={playerName}";

            string response = await client.GetStringAsync(url);

            PlayerData playerData = JsonConvert.DeserializeObject<PlayerData>(response);
            if (playerData == null)
            {
                Console.WriteLine("Failed to parse JSON!");
                return;
            }

            Player player1 = new Player(playerName, playerData);
            string jsonText = File.ReadAllText("BossReqsRaw.json");
            List<BossReqs> bossList = JsonConvert.DeserializeObject<List<BossReqs>>(jsonText);
            var BossResults = new List<BossReqs>();
            foreach (var boss in bossList)
            {
                var stats = boss.Requirements.Stats;
                var attack = stats.Attack;
                var strength = stats.Strength;
                var defense = stats.Defense;
                var magic = stats.Magic;
                var ranged = stats.Ranged;
                var Prayer = stats.Prayer;
                if (player1.Skills["Attack"].Level >= attack && player1.Skills["Strength"].Level >= strength && player1.Skills["Defence"].Level >= defense && player1.Skills["Magic"].Level >= magic && player1.Skills["Ranged"].Level >= ranged && player1.Skills["Prayer"].Level >= Prayer)
                {
                    BossResults.Add(boss);
                }

            }
            foreach (var boss in BossResults)
            {
                Console.WriteLine(boss.Name);
            }






            Console.WriteLine("Response from OSRS API:");
            Console.WriteLine($"Overall Level: {playerData.Skills[0].Level}");
            Console.WriteLine($"Number of Skills: {playerData.Skills.Count}");



        }
    }

}
*/