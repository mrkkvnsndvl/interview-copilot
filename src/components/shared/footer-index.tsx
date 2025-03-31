import { MicIcon, MicOffIcon, SendIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useSpeechRecognitionStore } from "@/hooks/useSpeechRecognitionStore";

export default function FooterIndex() {
  const { isListening, startListening, stopListening } =
    useSpeechRecognitionStore();

  const handleMicClick = () => {
    if (isListening) {
      stopListening();
    } else {
      startListening();
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
      <Button className="p-6 cursor-pointer" variant="default">
        <SendIcon className="w-6 h-6" /> Get answer
      </Button>
    </footer>
  );
}
