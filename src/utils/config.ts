export const config = {
  elevenLabsApiKey: () => localStorage.getItem("elevenlabs_api_key") || "",
  setElevenLabsApiKey: (key: string) =>
    localStorage.setItem("elevenlabs_api_key", key),
};
