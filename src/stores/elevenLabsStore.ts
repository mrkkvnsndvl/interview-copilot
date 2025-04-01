import { Store } from "@tanstack/react-store";
import { ElevenLabsClient } from "elevenlabs";
import { questionWords } from "@/constants";

interface ElevenLabsState {
  transcript: string;
  isListening: boolean;
  error: string | null;
  isQuestion: boolean;
  isProcessing: boolean;
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

class ElevenLabsStore extends Store<ElevenLabsState> {
  private client: ElevenLabsClient;
  private mediaRecorder: MediaRecorder | null = null;
  private audioChunks: Blob[] = [];

  constructor() {
    super({
      transcript: "",
      isListening: false,
      error: null,
      isQuestion: false,
      isProcessing: false,
    });

    this.client = new ElevenLabsClient({
      apiKey: "sk_76f1485923d428dbaef82846bd38dcd70519f1c82f89ea94",
    });
  }

  startListening = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      this.mediaRecorder = new MediaRecorder(stream);
      this.audioChunks = [];

      this.mediaRecorder.ondataavailable = (event) => {
        this.audioChunks.push(event.data);
      };

      this.mediaRecorder.onstop = async () => {
        const audioBlob = new Blob(this.audioChunks, { type: "audio/wav" });
        await this.convertSpeechToText(audioBlob);
      };

      this.mediaRecorder.start();
      this.setState((state) => ({
        ...state,
        isListening: true,
        error: null,
      }));
    } catch (error) {
      this.setState((state) => ({
        ...state,
        error: "Error accessing microphone",
        isListening: false,
      }));
    }
  };

  stopListening = () => {
    if (this.mediaRecorder && this.mediaRecorder.state !== "inactive") {
      this.mediaRecorder.stop();
      this.setState((state) => ({
        ...state,
        isListening: false,
      }));
    }
  };

  private async convertSpeechToText(audioBlob: Blob) {
    try {
      this.setState((state) => ({ ...state, isProcessing: true }));

      const response = await this.client.speechToText.convert({
        model_id: "scribe_v1",
        file: audioBlob,
      });

      const transcript = response.text;

      this.setState((state) => ({
        ...state,
        transcript,
        isQuestion: isQuestionString(transcript),
        isProcessing: false,
        error: null,
      }));
    } catch (error) {
      this.setState((state) => ({
        ...state,
        error: "Error converting speech to text",
        isProcessing: false,
      }));
    }
  }
}

export const elevenLabsStore = new ElevenLabsStore();
