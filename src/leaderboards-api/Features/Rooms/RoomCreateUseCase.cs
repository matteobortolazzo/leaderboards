using Microsoft.AspNetCore.Mvc;

namespace Leaderboards.Features.Rooms;

public record CreateRoomRequest(string Id);

public static class RoomCreateUserCase
{
    public static RouteGroupBuilder MapCreateRoom(this RouteGroupBuilder roomEndpoints)
    {
        roomEndpoints.MapPost("/", (
                [FromBody] CreateRoomRequest request) =>
            {
                return TypedResults.Ok();
            })
            .WithName("CreateRoom")
            .Produces(StatusCodes.Status200OK);

        return roomEndpoints;
    }
}
