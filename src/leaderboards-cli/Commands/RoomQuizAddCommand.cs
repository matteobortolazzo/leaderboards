using System.ComponentModel;
using Spectre.Console;
using Spectre.Console.Cli;

namespace Leaderboards.Cli.Commands;

internal sealed class RoomQuizAddCommand : AsyncCommand<RoomQuizAddCommand.Settings>
{
    public sealed class Settings : CommandSettings
    {
        [Description("The prompt to generate the quiz")]
        [CommandArgument(0, "<prompt>")]
        public string? Prompt { get; init; }
        
        [Description("The room to add the quiz to")]
        [CommandOption("-r|--room <room>")]
        public string? Room { get; set; }
    }

    public override ValidationResult Validate(CommandContext context, Settings settings)
    {
        return settings.Room == null
            ? ValidationResult.Error("Room is required when adding a quiz.")
            : ValidationResult.Success();
    }

    public override Task<int> ExecuteAsync(CommandContext context, Settings settings)
    {
        throw new NotImplementedException();
    }
}