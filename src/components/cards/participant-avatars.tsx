import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import type { ParticipantAvatarsProps } from "./types"

export function ParticipantAvatars({ participants, additionalCount }: ParticipantAvatarsProps) {
  return (
    <div className="flex items-center -space-x-1">
      {participants.map((participant, index) => (
        <Avatar key={index} className="h-8 w-8 border-2 border-white">
          <AvatarImage src={participant.src || "/placeholder.svg"} />
          <AvatarFallback>
            {participant.fallback}
          </AvatarFallback>
        </Avatar>
      ))}
      {additionalCount && additionalCount > 0 && (
        <div className="h-8 w-8 rounded-full bg-[#212121] border-2 border-white flex items-center justify-center">
          <span className="text-white text-xs font-medium">+{additionalCount}</span>
        </div>
      )}
    </div>
  )
}