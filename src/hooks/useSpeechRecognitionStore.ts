import { useStore } from "@tanstack/react-store";
import { speechRecognitionStore } from "@/stores/speechRecognitionStore";

export function useSpeechRecognitionStore() {
  const state = useStore(speechRecognitionStore);

  return {
    ...state,
    startListening: speechRecognitionStore.startListening,
    stopListening: speechRecognitionStore.stopListening,
  };
}
