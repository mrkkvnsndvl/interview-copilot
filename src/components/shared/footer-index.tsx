import { MicIcon, MicOffIcon, SendIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useSpeechRecognitionStore } from "@/hooks/useSpeechRecognitionStore";
import { useApiStore } from "@/hooks/useApiStore";

export default function FooterIndex() {
  const { isListening, startListening, stopListening, transcript } =
    useSpeechRecognitionStore();
  const { generateAnswer } = useApiStore();

  const handleMicClick = () => {
    if (isListening) {
      stopListening();
    } else {
      startListening();
    }
  };

  const handleGetAnswer = async () => {
    if (!transcript) return;

    try {
      await generateAnswer(transcript);
    } catch (error) {
      console.error("Failed to generate answer:", error);
    }
  };

  return (
    <footer className="grid items-center justify-center grid-cols-2 p-6 row-end-9 gap-x-3">
      <Button
        className="p-6 cursor-pointer"
        variant={isListening ? "destructive" : "default"}
        onClick={handleMicClick}
      >
        {isListening ? (
          <>
            <MicOffIcon className="w-6 h-6" /> Stop listening
          </>
        ) : (
          <>
            <MicIcon className="w-6 h-6" /> Start listening
          </>
        )}
      </Button>
      <Button
        className="p-6 cursor-pointer"
        variant="default"
        onClick={handleGetAnswer}
        disabled={!transcript}
      >
        <SendIcon className="w-6 h-6" /> Get answer
      </Button>
    </footer>
  );
}
