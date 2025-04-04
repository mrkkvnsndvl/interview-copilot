import { useStore } from "@tanstack/react-store";
import { apiStore } from "@/stores/apiStore";
import { generateAnswer } from "@/services/openRouterApi";

export function useApiStore() {
  const state = useStore(apiStore);

  return {
    ...state,
    setApiKey: apiStore.setApiKey,
    setJobPosition: apiStore.setJobPosition,
    setJobDescription: apiStore.setJobDescription, // Add this
    setSelectedModel: apiStore.setSelectedModel,
    generateAnswer,
  };
}
