import { useState } from "react";
import { Button } from "@/components/ui/button";
import { SlidersHorizontal, ChevronDown, Info } from "lucide-react";
import TimelineStepper from "./timeline-stepper";
import { DateConsultationCard, InvitationCard, EventCard } from "../cards";
import type { TimelineStep, PreviewPanelData } from "@/types/timeline";

const PreviewPanel = ({ data }: { data: PreviewPanelData }) => {
  const formatParticipants = (participants?: any[]) => {
    return (
      participants?.map((p) => ({
        src: p.avatar,
        fallback: p.fallback || p.initials || p.name?.charAt(0) || "U",
      })) || []
    );
  };

  switch (data.type) {
    case "date-consultation": {
      const consultationState = data.isSetupComplete
        ? "voting"
        : "ready-to-send";
      const formattedOptions =
        data.dateOptions?.map((option) => ({
          date: `${option.date} · ${option.time}`,
          voters: option.voters ? formatParticipants(option.voters) : undefined,
          percentage: option.percentage ? `${option.percentage}%` : undefined,
        })) || [];

      return (
        <DateConsultationCard
          state={consultationState}
          participants={formatParticipants(data.participants)}
          additionalCount={Math.max(0, (data.participants?.length || 0) - 3)}
          options={formattedOptions}
        />
      );
    }
    case "invitations": {
      const invitationState = data.isSetupComplete ? "scheduled" : "undefined";
      return (
        <InvitationCard
          state={invitationState}
          dateTime={data.dateTime}
          emailParticipants={formatParticipants(
            data.emailParticipants || data.participants
          )}
          postParticipants={formatParticipants(
            data.postParticipants || data.participants?.slice(2, 5)
          )}
          emailStatus={data.emailSent ? "5 Sent" : "Date & Time Undefined"}
          postStatus={
            data.postsToSend
              ? { type: "badge", text: `${data.postsToSend} To Send` }
              : "Date & Time Undefined"
          }
        />
      );
    }
    case "event": {
      const eventState = data.isSetupComplete ? "scheduled" : "undefined";
      const formattedAgenda =
        data.agenda && data.agenda.length > 0
          ? data.agenda.map((item, index) => ({
              number: index + 1,
              title: item.title,
              type: item.type,
              duration: item.count || 0,
            }))
          : "empty";

      return (
        <EventCard
          state={eventState}
          dateTime={data.dateTime}
          participants={
            data.isSetupComplete
              ? formatParticipants(data.participants)
              : undefined
          }
          participantCount={data.participants?.length}
          additionalCount={Math.max(0, (data.participants?.length || 0) - 3)}
          postParticipants={
            !data.isSetupComplete
              ? formatParticipants(data.participants?.slice(2, 5))
              : undefined
          }
          agenda={formattedAgenda}
        />
      );
    }

    default:
      return (
        <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
          <div className="flex items-start justify-between mb-6">
            <div>
              <p className="text-sm text-gray-500 mb-1">{data.subtitle}</p>
              <h2 className="text-xl font-semibold text-gray-900">
                {data.title}
              </h2>
            </div>
          </div>
          <p className="text-gray-500">Preview for {data.type} - Coming soon</p>
        </div>
      );
  }
};

interface TimelineInterfaceProps {
  steps: TimelineStep[];
  previewData: PreviewPanelData[];
}

export const TimelineInterface = ({
  steps,
  previewData,
}: TimelineInterfaceProps) => {
  const [selectedStepId, setSelectedStepId] = useState<string>(
    steps.find((s) => s.status === "active")?.id || steps[0]?.id
  );

  const selectedPreview = previewData.find((p) => p.stepId === selectedStepId);

  return (
    <div className="min-h-fit w-10/12 border border-gray-200 rounded-lg overflow-hidden mx-auto">
      {/* Header */}
      <div className="bg-white border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Info className="h-4 w-4 text-gray-400" />
            <h1 className="text-lg font-medium text-gray-600">Timeline</h1>
          </div>
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              className="text-gray-700 hover:text-gray-900 hover:bg-gray-50 px-3 py-2 font-medium"
            >
              <span className="text-sm">Filter</span>
              <SlidersHorizontal className="h-4 w-4 mr-2" />
            </Button>
            <Button
              size="sm"
              className="bg-gray-900 hover:bg-gray-800 text-white px-4 py-2 rounded-lg font-medium"
            >
              <span>ADD</span>
              <ChevronDown className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex">
        {/* Timeline Sidebar */}
        <div className="w-1/2 bg-white p-4">
          <TimelineStepper
            steps={steps}
            selectedStepId={selectedStepId}
            onStepSelect={setSelectedStepId}
          />
        </div>

        {/* Preview Panel */}
        <div className="w-1/2 p-4">
          {selectedPreview ? (
            <PreviewPanel data={selectedPreview} />
          ) : (
            <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
              <p className="text-gray-500">
                No preview available for this step
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
