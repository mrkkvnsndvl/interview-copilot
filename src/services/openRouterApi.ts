import axios from "axios";
import { apiStore } from "@/stores/apiStore";

const BASE_URL = "https://openrouter.ai/api/v1";

interface OpenRouterResponse {
  choices: Array<{
    text: string;
    message: {
      content: string;
    };
  }>;
}

export async function generateAnswer(question: string): Promise<string> {
  const state = apiStore.state;

  if (!state.apiKey) {
    throw new Error("Please enter your OpenRouter API key in settings");
  }

  if (!state.selectedModel) {
    throw new Error("Please select an AI model in settings");
  }

  try {
    apiStore.setState((state) => ({ ...state, isLoading: true, error: null }));

    const response = await axios.post<OpenRouterResponse>(
      `${BASE_URL}/chat/completions`,
      {
        model: state.selectedModel.id,
        messages: [
          {
            role: "system",
            content:
              "You are a job candidate being interviewed. Respond as if you're in a professional job interview, but limit your responses to maximum 3 sentences only. Be concise yet professional, focusing on the most relevant information. Never exceed 3 sentences in your response.",
          },
          {
            role: "user",
            content: state.jobPosition
              ? `I am interviewing for a ${state.jobPosition} position. ${question}`
              : question,
          },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${state.apiKey}`,
          "HTTP-Referer": window.location.href,
          "X-Title": "Interview Copilot",
          "Content-Type": "application/json",
        },
      }
    );

    const answer =
      response.data.choices[0]?.message?.content ||
      response.data.choices[0]?.text ||
      "No response generated";

    apiStore.setState((state) => ({
      ...state,
      isLoading: false,
      answer,
    }));

    return answer;
  } catch (error) {
    let errorMessage = "An error occurred";

    if (axios.isAxiosError(error)) {
      if (error.response?.status === 401) {
        errorMessage =
          "Invalid API key. Please check your OpenRouter API key in settings";
      } else if (error.response?.data?.error?.message) {
        errorMessage = error.response.data.error.message;
      }
    }

    apiStore.setState((state) => ({
      ...state,
      isLoading: false,
      error: errorMessage,
    }));
    throw new Error(errorMessage);
  }
}
