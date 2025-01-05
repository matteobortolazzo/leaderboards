using System.ComponentModel;
using Spectre.Console.Cli;

namespace Leaderboards.Cli.Commands;

internal sealed class RoomCreateCommand : AsyncCommand<RoomCreateCommand.Settings>
{
    public sealed class Settings : CommandSettings
    {
        [Description("The name of the room")]
        [CommandArgument(0, "<name>")]
        public string? Name { get; init; }
    }

    public override Task<int> ExecuteAsync(CommandContext context, Settings settings)
    {
        throw new NotImplementedException();
    }
}