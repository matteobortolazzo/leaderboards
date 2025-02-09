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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useEffect, useState } from "react"

const FormSchema = z.object({
  type: z.string({
    required_error: "You need to select an answer.",
  }),
})

const answers = [
  "A methodology that combines software development and IT operations to shorten the development lifecycle while delivering high-quality software continuously.",
  "A set of programming languages designed specifically for building web applications efficiently.",
  "A project management approach that focuses on creating detailed plans for software delivery but does not emphasize collaboration.",
  "A cloud-based technology for hosting applications without the need for infrastructure management."
];

export interface QuizPageProps {
  onAnswer: (answerIndex: number) => void;
}

export function QuizPage({ onAnswer }: QuizPageProps) {
  const [time, setTime] = useState(10);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTime(currentTime => {
        if (currentTime <= 0) {
          clearTimeout(timer);
          onAnswer(-1);
          return 0;
        }
        return currentTime - 1;
      });
    }, 1000);

    return () => clearTimeout(timer);
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });


  function onSubmit(data: z.infer<typeof FormSchema>) {
    onAnswer(+data.type);
  }

  return (
    <Form {...form}>
      {time > 0 && <p className="text-xl font-bold py-2">{time}s</p>}
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>What is DevOps?</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  {answers.map((answer, index) => {
                    const value = index.toString();
                    return (
                      <FormItem key={value} className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value={value} />
                        </FormControl>
                        <FormLabel className="font-normal">
                          {answer}
                        </FormLabel>
                      </FormItem>
                    );
                  })}
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}

