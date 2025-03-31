import { questionWords } from "@/constants";
import { Store } from "@tanstack/react-store";

interface SpeechRecognitionState {
  transcript: string;
  isListening: boolean;
  error: string | null;
  isQuestion: boolean;
}

const isQuestionString = (text: string): boolean => {
  const lowercaseText = text.toLowerCase().trim();
  if (lowercaseText.endsWith("?")) return true;

  const words = lowercaseText.split(" ");
  for (let i = 0; i < words.length; i++) {
    if (questionWords.includes(words[i]) && i < words.length - 1) {
      const nextWords = words.slice(i, i + 3).join(" ");
      if (
        nextWords.includes("you") ||
        nextWords.includes("i") ||
        nextWords.includes("the")
      ) {
        return true;
      }
    }
  }
  return false;
};

class SpeechRecognitionStore extends Store<SpeechRecognitionState> {
  private recognition: SpeechRecognition | null = null;

  constructor() {
    super({
      transcript: "",
      isListening: false,
      error: null,
      isQuestion: false,
    });

    if (typeof window !== "undefined") {
      const SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition;
      if (SpeechRecognition) {
        this.recognition = new SpeechRecognition();
        this.setupRecognition();
      } else {
        this.setState((state) => ({
          ...state,
          error: "Speech recognition not supported",
        }));
      }
    }
  }

  private setupRecognition() {
    if (!this.recognition) return;

    this.recognition.continuous = true;
    this.recognition.interimResults = true;

    this.recognition.onresult = (event: SpeechRecognitionEvent) => {
      const currentTranscript = Array.from(event.results)
        .map((result) => result[0].transcript)
        .join(" ");

      this.setState((state) => ({
        ...state,
        transcript: currentTranscript,
        isQuestion: isQuestionString(currentTranscript),
      }));
    };

    this.recognition.onerror = (event: SpeechRecognitionErrorEvent) => {
      this.setState((state) => ({
        ...state,
        error: event.error,
        isListening: false,
      }));
    };

    this.recognition.onend = () => {
      const currentState = this.state;
      if (currentState.isListening && this.recognition) {
        try {
          this.recognition.start();
        } catch (err) {
          this.setState((state) => ({
            ...state,
            error: "Failed to restart speech recognition",
            isListening: false,
          }));
        }
      }
    };
  }

  startListening = () => {
    if (!this.recognition) return;

    try {
      this.recognition.start();
      this.setState((state) => ({
        ...state,
        error: null,
        isListening: true,
      }));
    } catch (err) {
      this.setState((state) => ({
        ...state,
        error: "Error starting speech recognition",
        isListening: false,
      }));
    }
  };

  stopListening = () => {
    if (!this.recognition) return;

    this.recognition.stop();
    this.setState((state) => ({
      ...state,
      isListening: false,
    }));
  };
}

export const speechRecognitionStore = new SpeechRecognitionStore();
