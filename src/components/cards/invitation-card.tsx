import { MoreHorizontal, Calendar, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ParticipantAvatars } from "./participant-avatars"
import type { InvitationCardProps } from "./types"

export function InvitationCard({
  state,
  dateTime,
  emailParticipants,
  postParticipants,
  emailStatus,
  postStatus,
}: InvitationCardProps) {
  return (
    <Card className="bg-white shadow-sm border border-[#e0e0e0]">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-[#9e9e9e] mb-1">Ordinary General Assembly 2025</p>
            <h3 className="text-lg font-semibold text-[#212121]">Invitations: Virtual and Physical</h3>
          </div>
          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
            <MoreHorizontal className="h-4 w-4 text-[#9e9e9e]" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-col justify-start">
          <div className="flex items-center gap-2 mb-2 justify-between">
            <p className="text-sm font-medium text-[#212121]">Date & Time</p>
            {state === "undefined" && (
              <Badge className="bg-[#fff3e0] text-[#ff9800] text-xs px-2 py-0.5 font-medium border-0">Undefined</Badge>
            )}
          </div>
          <p className="text-sm text-[#9e9e9e] text-start">{dateTime || "Consultation until 30.04.2025"}</p>
        </div>

        <div className="flex flex-col justify-start">
          <p className="text-sm font-medium text-[#212121] mb-2 text-start">Location</p>
          <p className="text-sm text-[#9e9e9e] text-start">Long Long Street Name 123, 1234 Region</p>
        </div>

        <div className="flex flex-col justify-start">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm font-medium text-[#212121]">Via Email</p>
            <span className="text-xs text-[#9e9e9e]">{emailStatus}</span>
          </div>
          <ParticipantAvatars participants={emailParticipants} additionalCount={2} />
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm font-medium text-[#212121]">Via Post</p>
            {typeof postStatus === "string" ? (
              <span className="text-xs text-[#9e9e9e]">{postStatus}</span>
            ) : (
              <Badge className="bg-[#fff3e0] text-[#ff9800] text-xs px-2 py-0.5 font-medium border-0">
                {postStatus.text}
              </Badge>
            )}
          </div>
          <ParticipantAvatars participants={postParticipants} />
        </div>

        <div className="flex items-center gap-2 pt-2">
          {state === "undefined" ? (
            <Button size="sm" className="bg-[#212121] text-white hover:bg-[#212121]/90 ml-auto">
              <Calendar className="h-4 w-4 mr-1" />
              SET DATE
            </Button>
          ) : (
            <>
              <Button
                variant="outline"
                size="sm"
                className="text-[#212121] border-[#e0e0e0] bg-transparent hover:bg-[#f5f5f5]"
              >
                DETAILS
              </Button>
              <Button size="sm" className="bg-[#212121] text-white hover:bg-[#212121]/90 ml-auto">
                INVITATIONS
                <ChevronDown className="ml-1 h-3 w-3" />
              </Button>
            </>
          )}
        </div>
      </CardContent>
    </Card>
  )
}