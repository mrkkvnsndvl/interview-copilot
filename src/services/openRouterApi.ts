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
            content: `You are a human job candidate interviewing for a ${state.jobPosition} position. 
            Here is your job description: ${state.jobDescription}
            
            Important instructions:
            1. Never mention that you are an AI
            2. Respond as a real person with relevant work experience
            3. Use first-person perspective ("I", "my", "me")
            4. Draw from the job description to align your answers
            5. Keep responses to maximum 2 concise sentences
            6. Show personality while maintaining professionalism
            7. Include specific examples from supposed past experiences
            8. For strengths/weaknesses questions, give realistic human traits
            
            Remember: You are a human candidate with real work history and experiences matching the job requirements.`,
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
