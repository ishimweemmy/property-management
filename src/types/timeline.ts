export interface Participant {
  id: string
  name: string
  avatar?: string
  fallback: string
}

export interface DateOption {
  date: string
  time: string
  votes?: number
  percentage?: number
  voters?: Participant[]
}

export interface AgendaItem {
  id: number
  title: string
  type: 'Vote' | 'Group' | 'Discussion'
  count: number
  status?: string
}

export interface TimelineStep {
  id: string
  date: string
  deadline?: string
  title: string
  subtitle?: string
  icon: 'calendar' | 'bar-chart' | 'envelope' | 'check' | 'dot' | 'users'
  status: 'completed' | 'active' | 'pending' | 'placeholder'
  hasPreview: boolean
}

export interface PreviewPanelData {
  stepId: string
  title: string
  subtitle: string
  type: 'date-consultation' | 'invitations' | 'event' | 'task' | 'milestone'
  participants?: Participant[]
  dateOptions?: DateOption[]
  location?: string
  agenda?: AgendaItem[]
  status?: 'ready-to-send' | 'undefined' | 'sent' | 'to-send' | 'empty'
  dateTime?: string
  deadline?: string
  votingStatus?: string
  isSetupComplete?: boolean
  emailParticipants?: Participant[]
  postParticipants?: Participant[]
  emailSent?: boolean
  postsToSend?: number
}

export interface TimelineItem extends PreviewPanelData {}