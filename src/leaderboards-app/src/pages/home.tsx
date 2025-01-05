import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

function HomePage() {
  const [room, setRoom] = useState<string>('')

  return (
    <section className="flex flex-col gap-4">
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="room">Room</Label>
        <Input name="room" type="text"
          value={room}
          onChange={e => setRoom(e.target.value)}>
        </Input>
      </div>
      <Button disabled={room.length < 4}>Join</Button>
    </section>
  );
}

export default HomePage;

