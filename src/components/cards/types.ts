export interface Participant {
  src?: string
  fallback: string
}

export interface DateConsultationCardProps {
  state: "ready-to-send" | "voting"
  participants: Participant[]
  additionalCount: number
  options: Array<{
    date: string
    voters?: Participant[]
    percentage?: string
  }>
}

export interface InvitationCardProps {
  state: "undefined" | "scheduled"
  dateTime?: string
  emailParticipants: Participant[]
  postParticipants: Participant[]
  emailStatus: string
  postStatus: string | { type: "badge"; text: string }
}

export interface EventCardProps {
  state: "undefined" | "scheduled"
  dateTime?: string
  participants?: Participant[]
  participantCount?: number
  additionalCount?: number
  postParticipants?: Participant[]
  agenda:
    | Array<{
        number: number
        title: string
        type: string
        duration: number
      }>
    | "empty"
}

export interface ParticipantAvatarsProps {
  participants: Participant[]
  additionalCount?: number
}