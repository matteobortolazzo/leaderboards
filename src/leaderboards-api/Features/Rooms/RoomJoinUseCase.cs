using Microsoft.AspNetCore.Mvc;

namespace Leaderboards.Features.Rooms;

public record JoinRoomRequest(string Email);

public static class RoomJoinUseCase
{
    public static RouteGroupBuilder MapJoinRoom(this RouteGroupBuilder roomEndpoints)
    {
        roomEndpoints.MapPost("{roomId}/join", (
                [FromBody] JoinRoomRequest request,
                [FromRoute] string roomId) =>
            {
                return TypedResults.Ok();
            })
            .WithName("JoinRoom")
            .Produces(StatusCodes.Status200OK);

        return roomEndpoints;
    }
}
