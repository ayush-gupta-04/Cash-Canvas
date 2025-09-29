import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "cash-canvas-platform", // Unique app ID
  name: "Cash Canvas",
  retryFunction: async (attempt) => ({
    delay: Math.pow(2, attempt) * 1000, // Exponential backoff
    maxAttempts: 2,
  }),
});
