using Microsoft.AspNetCore.Mvc;

namespace Leaderboards.Features.Rooms;

public static class RoomGetUseCase
{
    public static RouteGroupBuilder MapGetRoom(this RouteGroupBuilder roomEndpoints)
    {
        roomEndpoints.MapGet("{roomId}", (
                [FromRoute] string roomId) =>
            {
                return TypedResults.Ok();
            })
            .WithName("GetRoom")
            .Produces(StatusCodes.Status200OK);

        return roomEndpoints;
    }
}
