"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const FormSchema = z.object({
  room: z.string().min(4, {
    message: "Room must be at least 4 characters.",
  }),
})

export interface HomePageProps {
  onRoomJoin: (roomId: string) => void;
}

export function HomePage({ onRoomJoin: onRoom }: HomePageProps) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      room: "",
    },
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    onRoom(data.room);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="room"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Room</FormLabel>
              <FormControl>
                <Input placeholder="room-code" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Join</Button>
      </form>
    </Form>
  )
}

export default HomePage;
