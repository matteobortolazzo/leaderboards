using Leaderboards.Cli.Commands;
using Leaderboards.Cli.Infrastructure;
using Microsoft.Extensions.DependencyInjection;
using Spectre.Console.Cli;

var registrations = new ServiceCollection();
registrations.AddHttpClient();

// Create a type registrar and register any dependencies.
// A type registrar is an adapter for a DI framework.
var registrar = new TypeRegistrar(registrations);

var app = new CommandApp(registrar);
app.Configure(config =>
{
    config.AddBranch("room", room =>
    {
        room.AddCommand<RoomCreateCommand>("create");

        room.AddBranch("quiz", quiz =>
        {
            quiz.AddCommand<RoomQuizAddCommand>("add");
        });
    });
});
return app.Run(args);
