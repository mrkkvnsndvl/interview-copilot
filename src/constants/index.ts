export const questionWords = [
  "what",
  "when",
  "where",
  "which",
  "who",
  "whom",
  "whose",
  "why",
  "how",
  "can",
  "could",
  "would",
  "should",
  "will",
  "do",
  "does",
  "did",
  "is",
  "are",
  "was",
  "were",
];

export interface AIModel {
  name: string;
  id: string;
}

export const aiModels: AIModel[] = [
  {
    name: "DeepSeek V3 Base",
    id: "deepseek/deepseek-v3-base:free",
  },
  {
    name: "Molmo 7B D",
    id: "allenai/molmo-7b-d:free",
  },
  {
    name: "UI-TARS 72B",
    id: "bytedance-research/ui-tars-72b:free",
  },
  {
    name: "Qwen2.5 VL 3B Instruct",
    id: "qwen/qwen2.5-vl-3b-instruct:free",
  },
  {
    name: "Gemini Pro 2.5 Experimental",
    id: "google/gemini-2.5-pro-exp-03-25:free",
  },
  {
    name: "Qwen2.5 VL 32B Instruct",
    id: "qwen/qwen2.5-vl-32b-instruct:free",
  },
  {
    name: "DeepSeek V3 0324",
    id: "deepseek/deepseek-chat-v3-0324:free",
  },
  {
    name: "Qwerky 72B",
    id: "featherless/qwerky-72b:free",
  },
  {
    name: "Mistral Small 3.1 24B",
    id: "mistralai/mistral-small-3.1-24b-instruct:free",
  },
  {
    name: "OlympicCoder 7B",
    id: "open-r1/olympiccoder-7b:free",
  },
  {
    name: "OlympicCoder 32B",
    id: "open-r1/olympiccoder-32b:free",
  },
  {
    name: "Gemma 3 1B",
    id: "google/gemma-3-1b-it:free",
  },
  {
    name: "Gemma 3 4B",
    id: "google/gemma-3-4b-it:free",
  },
  {
    name: "Gemma 3 12B",
    id: "google/gemma-3-12b-it:free",
  },
  {
    name: "Reka Flash 3",
    id: "rekaai/reka-flash-3:free",
  },
  {
    name: "Gemma 3 27B",
    id: "google/gemma-3-27b-it:free",
  },
  {
    name: "DeepSeek R1 Zero",
    id: "deepseek/deepseek-r1-zero:free",
  },
  {
    name: "QwQ 32B",
    id: "qwen/qwq-32b:free",
  },
  {
    name: "Moonlight 16B A3B Instruct",
    id: "moonshotai/moonlight-16b-a3b-instruct:free",
  },
  {
    name: "DeepHermes 3 Llama 3 8B Preview",
    id: "nousresearch/deephermes-3-llama-3-8b-preview:free",
  },
  {
    name: "Dolphin3.0 R1 Mistral 24B",
    id: "cognitivecomputations/dolphin3.0-r1-mistral-24b:free",
  },
  {
    name: "Dolphin3.0 Mistral 24B",
    id: "cognitivecomputations/dolphin3.0-mistral-24b:free",
  },
  {
    name: "Gemini Pro 2.0 Experimental",
    id: "google/gemini-2.0-pro-exp-02-05:free",
  },
  {
    name: "Qwen2.5 VL 72B Instruct",
    id: "qwen/qwen2.5-vl-72b-instruct:free",
  },
  {
    name: "Mistral Small 3",
    id: "mistralai/mistral-small-24b-instruct-2501:free",
  },
  {
    name: "DeepSeek R1 Distill Qwen 32B",
    id: "deepseek/deepseek-r1-distill-qwen-32b:free",
  },
  {
    name: "DeepSeek R1 Distill Qwen 14B",
    id: "deepseek/deepseek-r1-distill-qwen-14b:free",
  },
  {
    name: "DeepSeek R1 Distill Llama 70B",
    id: "deepseek/deepseek-r1-distill-llama-70b:free",
  },
  {
    name: "Gemini 2.0 Flash Thinking Experimental 01-21",
    id: "google/gemini-2.0-flash-thinking-exp:free",
  },
  {
    name: "DeepSeek R1",
    id: "deepseek/deepseek-r1:free",
  },
  {
    name: "Rogue Rose 103B v0.2",
    id: "sophosympatheia/rogue-rose-103b-v0.2:free",
  },
  {
    name: "DeepSeek V3",
    id: "deepseek/deepseek-chat:free",
  },
  {
    name: "Gemini 2.0 Flash Thinking Experimental",
    id: "google/gemini-2.0-flash-thinking-exp-1219:free",
  },
  {
    name: "Gemini Flash 2.0 Experimental",
    id: "google/gemini-2.0-flash-exp:free",
  },
  {
    name: "Llama 3.3 70B Instruct",
    id: "meta-llama/llama-3.3-70b-instruct:free",
  },
  {
    name: "QwQ 32B Preview",
    id: "qwen/qwq-32b-preview:free",
  },
  {
    name: "LearnLM 1.5 Pro Experimental",
    id: "google/learnlm-1.5-pro-experimental:free",
  },
  {
    name: "Qwen2.5 Coder 32B Instruct",
    id: "qwen/qwen-2.5-coder-32b-instruct:free",
  },
  {
    name: "Llama 3.1 Nemotron 70B Instruct",
    id: "nvidia/llama-3.1-nemotron-70b-instruct:free",
  },
  {
    name: "Llama 3.2 1B Instruct",
    id: "meta-llama/llama-3.2-1b-instruct:free",
  },
  {
    name: "Llama 3.2 3B Instruct",
    id: "meta-llama/llama-3.2-3b-instruct:free",
  },
  {
    name: "Llama 3.2 11B Vision Instruct",
    id: "meta-llama/llama-3.2-11b-vision-instruct:free",
  },
  {
    name: "Qwen2.5 72B Instruct",
    id: "qwen/qwen-2.5-72b-instruct:free",
  },
  {
    name: "Qwen2.5 VL 7B Instruct",
    id: "qwen/qwen-2.5-vl-7b-instruct:free",
  },
  {
    name: "Llama 3.1 8B Instruct",
    id: "meta-llama/llama-3.1-8b-instruct:free",
  },
  {
    name: "Mistral Nemo",
    id: "mistralai/mistral-nemo:free",
  },
  {
    name: "Qwen 2 7B Instruct",
    id: "qwen/qwen-2-7b-instruct:free",
  },
  {
    name: "Gemma 2 9B",
    id: "google/gemma-2-9b-it:free",
  },
  {
    name: "Mistral 7B Instruct",
    id: "mistralai/mistral-7b-instruct:free",
  },
  {
    name: "Phi-3 Mini 128K Instruct",
    id: "microsoft/phi-3-mini-128k-instruct:free",
  },
  {
    name: "Phi-3 Medium 128K Instruct",
    id: "microsoft/phi-3-medium-128k-instruct:free",
  },
  {
    name: "Llama 3 8B Instruct",
    id: "meta-llama/llama-3-8b-instruct:free",
  },
  {
    name: "OpenChat 3.5 7B",
    id: "openchat/openchat-7b:free",
  },
  {
    name: "Toppy M 7B",
    id: "undi95/toppy-m-7b:free",
  },
  {
    name: "Zephyr 7B",
    id: "huggingfaceh4/zephyr-7b-beta:free",
  },
  {
    name: "MythoMax 13B",
    id: "gryphe/mythomax-l2-13b:free",
  },
];
