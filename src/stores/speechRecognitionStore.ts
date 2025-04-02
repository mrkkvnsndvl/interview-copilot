import { Store } from "@tanstack/react-store";
import { questionWords } from "@/constants";

interface SpeechRecognitionState {
  transcript: string;
  isListening: boolean;
  error: string | null;
  isQuestion: boolean;
  isSystemAudioEnabled: boolean;
}

class SpeechRecognitionStore extends Store<SpeechRecognitionState> {
  private recognition: SpeechRecognition | null = null;
  private audioContext: AudioContext | null = null;

  constructor() {
    super({
      transcript: "",
      isListening: false,
      error: null,
      isQuestion: false,
      isSystemAudioEnabled: false,
    });

    if (typeof window !== "undefined") {
      this.initializeSpeechRecognition();
    }
  }

  private async initializeSpeechRecognition() {
    try {
      // Initialize Web Speech API
      const SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition;
      if (SpeechRecognition) {
        this.recognition = new SpeechRecognition();
        this.setupRecognition();
      }

      // Request system audio using getDisplayMedia
      const displayStream = await navigator.mediaDevices.getDisplayMedia({
        audio: true,
        video: false,
      });

      // Get microphone stream
      const micStream = await navigator.mediaDevices.getUserMedia({
        audio: true,
      });

      // Set up audio context for mixing streams
      this.audioContext = new AudioContext();
      const destination = this.audioContext.createMediaStreamDestination();

      // Mix system audio and microphone
      const systemSource =
        this.audioContext.createMediaStreamSource(displayStream);
      const micSource = this.audioContext.createMediaStreamSource(micStream);

      systemSource.connect(destination);
      micSource.connect(destination);

      this.setState((state) => ({
        ...state,
        isSystemAudioEnabled: true,
        error: null,
      }));
    } catch (error) {
      console.error("Error initializing audio capture:", error);
      this.setState((state) => ({
        ...state,
        error: "Please share your system audio and grant microphone access",
        isSystemAudioEnabled: false,
      }));
    }
  }

  private setupRecognition() {
    if (!this.recognition) return;

    this.recognition.continuous = true;
    this.recognition.interimResults = true;

    this.recognition.onresult = (event: SpeechRecognitionEvent) => {
      const transcript = Array.from(event.results)
        .map((result) => result[0].transcript)
        .join("");

      this.setState((state) => ({
        ...state,
        transcript,
        isQuestion: this.isQuestionString(transcript),
      }));
    };

    this.recognition.onerror = (event: SpeechRecognitionErrorEvent) => {
      this.setState((state) => ({
        ...state,
        error: `Speech recognition error: ${event.error}`,
        isListening: false,
      }));
    };
  }

  private isQuestionString(text: string): boolean {
    const lowercaseText = text.toLowerCase().trim();
    return (
      lowercaseText.endsWith("?") ||
      questionWords.some((word) => lowercaseText.startsWith(word))
    );
  }

  startListening = () => {
    if (this.recognition) {
      this.recognition.start();
      this.setState((state) => ({
        ...state,
        isListening: true,
        error: null,
      }));
    }
  };

  stopListening = () => {
    if (this.recognition) {
      this.recognition.stop();
      this.setState((state) => ({
        ...state,
        isListening: false,
      }));
    }
  };
}

export const speechRecognitionStore = new SpeechRecognitionStore();
