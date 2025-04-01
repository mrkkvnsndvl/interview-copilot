import { OpenRouterKeyResponse } from "@/types/openRouter";
import { Store } from "@tanstack/react-store";

interface ApiState {
  apiKey: string;
  jobPosition: string;
  selectedModel: {
    name: string;
    id: string;
  } | null;
  isLoading: boolean;
  error: string | null;
  answer: string;
  rateLimitInfo: {
    usage: number;
    limit: number | null;
    isFreeTier: boolean;
    requestsLimit: number;
    interval: string;
  } | null;
}

class ApiStore extends Store<ApiState> {
  constructor() {
    super({
      apiKey: localStorage.getItem("openrouter_api_key") || "",
      jobPosition: localStorage.getItem("job_position") || "",
      selectedModel: null,
      isLoading: false,
      error: null,
      answer: "",
      rateLimitInfo: null,
    });
  }

  setApiKey = (apiKey: string) => {
    localStorage.setItem("openrouter_api_key", apiKey);
    this.setState((state) => ({ ...state, apiKey }));
  };

  setJobPosition = (jobPosition: string) => {
    localStorage.setItem("job_position", jobPosition);
    this.setState((state) => ({ ...state, jobPosition }));
  };

  setSelectedModel = (model: { name: string; id: string } | null) => {
    this.setState((state) => ({ ...state, selectedModel: model }));
  };

  setAnswer = (answer: string) => {
    this.setState((state) => ({ ...state, answer }));
  };

  checkApiKeyLimits = async () => {
    const { apiKey } = this.state;
    if (!apiKey) return;

    try {
      const response = await fetch("https://openrouter.ai/api/v1/auth/key", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to check API key limits");
      }

      const data: OpenRouterKeyResponse = await response.json();

      this.setState((state) => ({
        ...state,
        rateLimitInfo: {
          usage: data.data.usage,
          limit: data.data.limit,
          isFreeTier: data.data.is_free_tier,
          requestsLimit: data.data.rate_limit.requests,
          interval: data.data.rate_limit.interval,
        },
      }));

      return data.data;
    } catch (error) {
      console.error("Error checking API key limits:", error);
      throw error;
    }
  };
}

export const apiStore = new ApiStore();
