using Microsoft.AspNetCore.Mvc;

namespace Leaderboards.Features.Rooms;

public record GenerateQuizUseCase(string Topic);

public static class RoomQuizGenerateQuizUseCase
{
    public static RouteGroupBuilder MapGenerateQuiz(this RouteGroupBuilder roomEndpoints)
    {
        roomEndpoints.MapPost("{roomId}/quiz", (
                [FromBody] GenerateQuizUseCase request,
                [FromRoute] string roomId) =>
            {
                return TypedResults.Ok();
            })
            .WithName("GenerateRoomQuiz")
            .Produces(StatusCodes.Status200OK);

        return roomEndpoints;
    }
}
