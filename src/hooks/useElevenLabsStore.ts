import { useStore } from "@tanstack/react-store";
import { elevenLabsStore } from "../stores/elevenLabsStore";

export function useElevenLabsStore() {
  const state = useStore(elevenLabsStore);

  return {
    ...state,
    startListening: elevenLabsStore.startListening,
    stopListening: elevenLabsStore.stopListening,
  };
}
