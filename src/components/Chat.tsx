'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { useChat } from 'ai/react'
import { ScrollArea } from './ui/scroll-area'

export function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: '/api/chat',
  })
  return (
    <Card className="w-[440px]">
      <CardHeader className="bg-slate-200 rounded-t-lg">
        <CardTitle>Chat AI</CardTitle>
        <CardDescription>Using Vercel SDK to create a chat bot</CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="w-full h-[600px]  pr-4">
          {messages.map((message) => {
            return (
              <div
                className="flex gap-3 text-slate-600 text-sm mb-"
                key={message.id}
              >
                {message.role === 'user' && (
                  <Avatar>
                    <AvatarFallback>FR</AvatarFallback>
                    <AvatarImage src="https://github.com/lfeliperibeiro.png" />
                  </Avatar>
                )}
                {message.role === 'assistant' && (
                  <Avatar>
                    <AvatarFallback>WB</AvatarFallback>
                    <AvatarImage src="https://github.com/wBrain-team.png" />
                  </Avatar>
                )}
                <p className="leading-relaxed">
                  <span className="block font-bold text-slate-800 text-sm">
                    {message.role === 'user' ? 'Human' : 'Robot'}
                  </span>
                  {message.content}
                </p>
              </div>
            )
          })}
        </ScrollArea>
      </CardContent>
      <CardFooter className="bg-slate-200 rounded-b-lg pt-6">
        <form className="gap-2 flex w-full" onSubmit={handleSubmit}>
          <Input
            placeholder="How can I help you?"
            value={input}
            onChange={handleInputChange}
          />
          <Button type="submit">Send</Button>
        </form>
      </CardFooter>
    </Card>
  )
}
