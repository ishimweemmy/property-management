import { TimelineInterface } from './timeline-interface'
import type { TimelineStep, PreviewPanelData, Participant } from '@/types/timeline'

const sampleParticipants: Participant[] = [
  { id: '1', name: 'Sarah Johnson', fallback: 'SJ' },
  { id: '2', name: 'Alex Chen', fallback: 'A' },
  { id: '3', name: 'Frank Miller', fallback: 'F' },
  { id: '4', name: 'Other 1', fallback: 'O1' },
  { id: '5', name: 'Other 2', fallback: 'O2' }
]

const timelineSteps: TimelineStep[] = [
  {
    id: 'milestone-closing',
    date: '10.07.2025',
    deadline: 'Deadline',
    title: 'Milestone: Closing',
    icon: 'calendar',
    status: 'pending',
    hasPreview: false
  },
  {
    id: 'date-consultation',
    date: '15.04.2025',
    deadline: 'Deadline',
    title: 'Consultation: Date Ordinary General Assembly 2025',
    icon: 'bar-chart',
    status: 'active',
    hasPreview: true
  },
  {
    id: 'invitations',
    date: '15.04.2025',
    deadline: 'Deadline',
    title: 'Invitations: Ordinary General Assembly 2025',
    icon: 'envelope',
    status: 'pending',
    hasPreview: true
  },
  {
    id: 'event',
    date: '30.06.2025',
    deadline: 'Deadline',
    title: 'Event: Ordinary General Assembly 2025',
    icon: 'users',
    status: 'pending',
    hasPreview: true
  },
  {
    id: 'budget-review',
    date: '12.09.2025',
    deadline: 'Deadline',
    title: 'Task: Final Review of Budget Allocations',
    icon: 'check',
    status: 'pending',
    hasPreview: false
  },
  {
    id: 'fiscal-year-end',
    date: '31.12.2024',
    title: 'Fiscal Year End',
    icon: 'dot',
    status: 'completed',
    hasPreview: false
  },
  {
    id: 'general-assembly',
    date: '30.5.2024',
    title: 'General Assembly',
    subtitle: 'Placeholder',
    icon: 'users',
    status: 'completed',
    hasPreview: false
  }
]

const previewData: PreviewPanelData[] = [
  {
    stepId: 'date-consultation',
    title: 'Date Consultation',
    subtitle: 'Ordinary General Assembly 2025',
    type: 'date-consultation',
    participants: sampleParticipants,
    status: 'ready-to-send',
    dateOptions: [
      { date: '30.06.2025', time: '19:00' },
      { date: '27.06.2025', time: '18:00' },
      { date: '27.06.2025', time: '19:00' }
    ]
  },
  {
    stepId: 'invitations',
    title: 'Invitations: Virtual and Physical',
    subtitle: 'Ordinary General Assembly 2025',
    type: 'invitations',
    participants: sampleParticipants,
    status: 'undefined',
    location: 'Long Long Street Name 12a, 1234 Region',
    deadline: '30.04.2025'
  },
  {
    stepId: 'event',
    title: 'Event',
    subtitle: 'Ordinary General Assembly 2025',
    type: 'event',
    participants: sampleParticipants,
    status: 'undefined',
    location: 'Long Long Street Name 12a, 1234 Region',
    deadline: '30.04.2025',
    agenda: [
      { id: 1, title: "Approval of previous year's meeting minutes", type: 'Vote', count: 1 },
      { id: 2, title: "Creation of a communal bicycle storage area", type: 'Group', count: 3 },
      { id: 3, title: "Replacement of the main entrance interco...", type: 'Vote', count: 2 },
      { id: 4, title: "Discussion on noise complaints related to t...", type: 'Discussion', count: 2 }
    ]
  }
]

export const TimelineInterfaceDemo = () => {
  return (
    <TimelineInterface 
      steps={timelineSteps} 
      previewData={previewData} 
    />
  )
}