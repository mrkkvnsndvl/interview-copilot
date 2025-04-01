import { MessageCircleQuestionIcon } from "lucide-react";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { useElevenLabsStore } from "@/hooks/useElevenLabsStore";
import { createFileRoute } from "@tanstack/react-router";
import { useApiStore } from "@/hooks/useApiStore";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const { transcript, isProcessing, error, isQuestion } = useElevenLabsStore();
  const { answer, isLoading, error: apiError } = useApiStore();

  return (
    <>
      <section className="flex flex-col p-6 gap-y-3 h-1/2">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-medium">Transcript</h3>
          {isQuestion && (
            <div className="flex items-center text-blue-500 gap-x-2">
              <MessageCircleQuestionIcon className="w-4 h-4" />
              <span className="text-sm">Question Detected</span>
            </div>
          )}
        </div>
        <ScrollArea className="flex flex-col overflow-hidden text-balance h-[215.14px]">
          <p
            className={`pr-3 text-base ${isQuestion ? "text-blue-500" : "text-muted-foreground"}`}
          >
            {error
              ? error
              : isProcessing
                ? "Processing your speech..."
                : transcript ||
                  "Click the microphone button to start speaking..."}
          </p>
        </ScrollArea>
      </section>
      <Separator />
      <section className="flex flex-col p-6 gap-y-3 h-1/2">
        <h3 className="text-base font-medium">Copilot</h3>
        <ScrollArea className="flex flex-col overflow-hidden text-balance h-[215.14px]">
          <p className="pr-3 text-base text-muted-foreground">
            {isProcessing ? (
              "Processing your speech..."
            ) : isLoading ? (
              "Generating answer..."
            ) : apiError ? (
              <span className="text-red-500">{apiError}</span>
            ) : (
              answer || "Speak a question and I'll try to answer it"
            )}
          </p>
        </ScrollArea>
      </section>
      <Separator />
    </>
  );
}
