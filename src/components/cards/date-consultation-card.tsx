import { MoreHorizontal, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { ParticipantAvatars } from "./participant-avatars"
import type { DateConsultationCardProps } from "./types"

export function DateConsultationCard({ state, participants, additionalCount, options }: DateConsultationCardProps) {
  return (
    <Card className="bg-white shadow-sm border border-[#e0e0e0]">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <div className="text-start">
            <p className="text-sm text-[#9e9e9e] mb-1">Ordinary General Assembly 2025</p>
            <h3 className="text-lg font-semibold text-[#212121]">Date Consultation</h3>
          </div>
          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
            <MoreHorizontal className="h-4 w-4 text-[#9e9e9e]" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <p className="text-sm font-medium text-[#212121] mb-2 text-start">Participants</p>
          <ParticipantAvatars participants={participants} additionalCount={additionalCount} />
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm font-medium text-[#212121]">Date & Time Options</p>
            <div className="flex items-center gap-1">
              {state === "ready-to-send" ? (
                <>
                  <span className="text-xs text-[#9e9e9e]">3 Options</span>
                  <Badge className="bg-[#fff3e0] text-[#ff9800] text-xs px-2 py-0.5 font-medium border-0">
                    Ready to Send
                  </Badge>
                </>
              ) : (
                <>
                  <span className="text-xs text-[#9e9e9e]">Open until 30.04.2025</span>
                  <Badge className="bg-[#fff3e0] text-[#ff9800] text-xs px-2 py-0.5 font-medium border-0">
                    Date & Time Undefined
                  </Badge>
                </>
              )}
            </div>
          </div>

          <div className="space-y-2">
            {options.map((option, index) => (
              <div key={index} className="flex items-center justify-between py-2 px-3 bg-[#f5f5f5] rounded">
                <div className="flex items-center gap-2">
                  {option.voters && (
                    <div className="flex items-center -space-x-1 mr-2">
                      {option.voters.map((voter, voterIndex) => (
                        <Avatar key={voterIndex} className="h-6 w-6 border border-white">
                          <AvatarImage src={voter.src || "/placeholder.svg"} />
                          <AvatarFallback>
                            {voter.fallback}
                          </AvatarFallback>
                        </Avatar>
                      ))}
                    </div>
                  )}
                  <span className="text-sm text-[#212121]">{option.date}</span>
                </div>
                {option.percentage && <span className="text-xs text-[#9e9e9e]">{option.percentage}</span>}
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2 pt-2">
          {state === "ready-to-send" ? (
            <>
              <Button
                variant="outline"
                size="sm"
                className="text-[#212121] border-[#e0e0e0] bg-transparent hover:bg-[#f5f5f5]"
              >
                EDIT
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="text-[#212121] border-[#e0e0e0] bg-transparent hover:bg-[#f5f5f5]"
              >
                SKIP
              </Button>
              <Button size="sm" className="bg-[#212121] text-white hover:bg-[#212121]/90 ml-auto">
                SEND
              </Button>
            </>
          ) : (
            <Button size="sm" className="bg-[#212121] text-white hover:bg-[#212121]/90 ml-auto">
              <Calendar className="h-4 w-4 mr-1" />
              SET DATE
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}