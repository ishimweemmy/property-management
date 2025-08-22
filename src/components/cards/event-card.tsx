import { MoreHorizontal, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ParticipantAvatars } from "./participant-avatars"
import type { EventCardProps } from "./types"

export function EventCard({
  state,
  dateTime,
  participants,
  participantCount,
  additionalCount,
  postParticipants,
  agenda,
}: EventCardProps) {
  return (
    <Card className="bg-white shadow-sm border border-[#e0e0e0]">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <div className="text-start">
            <p className="text-sm text-[#9e9e9e] mb-1">Ordinary General Assembly 2025</p>
            <h3 className="text-lg font-semibold text-[#212121]">Event</h3>
          </div>
          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
            <MoreHorizontal className="h-4 w-4 text-[#9e9e9e]" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-col justify-start text-start">
          <div className="flex items-center gap-2 mb-2">
            <p className="text-sm font-medium text-[#212121]">Date & Time</p>
            {state === "undefined" && (
              <Badge className="bg-[#fff3e0] text-[#ff9800] text-xs px-2 py-0.5 font-medium border-0">Undefined</Badge>
            )}
          </div>
          <p className="text-sm text-[#9e9e9e]">{dateTime || "Consultation until 30.04.2025"}</p>
        </div>

        <div className="flex flex-col items-start text-start">
          <p className="text-sm font-medium text-[#212121] mb-2">Location</p>
          <p className="text-sm text-[#9e9e9e]">Long Long Street Name 123, 1234 Region</p>
        </div>

        {state === "undefined" && postParticipants && (
          <div>
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-medium text-[#212121]">Via Post</p>
              <Badge className="bg-[#fff3e0] text-[#ff9800] text-xs px-2 py-0.5 font-medium border-0">3 To Send</Badge>
            </div>
            <ParticipantAvatars participants={postParticipants} />
          </div>
        )}

        {state === "scheduled" && participants && (
          <div>
            <div className="flex justify-start gap-2 mb-2">
              <p className="text-sm font-medium text-[#212121] text-start">Participants</p>
              <span className="text-xs text-[#9e9e9e]">{participantCount}</span>
            </div>
            <ParticipantAvatars participants={participants} additionalCount={additionalCount} />
          </div>
        )}

        <div>
          <div className="flex items-center gap-2 mb-2">
            <p className="text-sm font-medium text-[#212121]">Agenda</p>
            {agenda !== "empty" && <span className="text-xs text-[#9e9e9e]">{agenda.length}</span>}
          </div>
          {agenda === "empty" ? (
            <p className="text-sm text-[#9e9e9e]">Empty</p>
          ) : (
            <div className="space-y-2">
              {agenda.map((item) => (
                <div key={item.number} className="flex items-center justify-between text-sm">
                  <div className="flex items-start gap-2 flex-1 min-w-0">
                    <span className="text-[#212121] flex-shrink-0">{item.number}.</span>
                    <span className="text-[#212121] truncate">{item.title}</span>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0 ml-2">
                    <span className="text-xs text-[#9e9e9e]">{item.type}</span>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3 text-[#9e9e9e]" />
                      <span className="text-xs text-[#9e9e9e]">{item.duration}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="flex items-center gap-2 pt-2">
          <Button
            variant="outline"
            size="sm"
            className="text-[#212121] border-[#e0e0e0] bg-transparent hover:bg-[#f5f5f5]"
          >
            EDIT
          </Button>
          <Button size="sm" className="bg-[#212121] text-white hover:bg-[#212121]/90 ml-auto">
            {state === "undefined" ? "CONTINUE SETUP" : "START"}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}