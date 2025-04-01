export interface ElevenLabsResponse {
  language_code: string;
  language_probability: number;
  text: string;
  words: Array<{
    text: string;
    start: number;
    end: number;
    type: string;
  }>;
}

export interface ElevenLabsState {
  transcript: string;
  isListening: boolean;
  error: string | null;
  isQuestion: boolean;
  isProcessing: boolean;
}