
'use server';
/**
 * @fileOverview Provides a conversational AI flow.
 *
 * - converseWithAi - A function that handles user input and returns an AI response.
 * - ConverseWithAiInput - The input type for the converseWithAi function.
 * - ConverseWithAiOutput - The return type for the converseWithAi function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ConverseWithAiInputSchema = z.object({
  userInput: z.string().describe('The user message to the AI.'),
});
export type ConverseWithAiInput = z.infer<typeof ConverseWithAiInputSchema>;

const ConverseWithAiOutputSchema = z.object({
  aiResponse: z.string().describe('The AI generated response.'),
});
export type ConverseWithAiOutput = z.infer<typeof ConverseWithAiOutputSchema>;

export async function converseWithAi(input: ConverseWithAiInput): Promise<ConverseWithAiOutput> {
  return chatFlow(input);
}

const prompt = ai.definePrompt({
  name: 'chatPrompt',
  input: {schema: ConverseWithAiInputSchema},
  output: {schema: ConverseWithAiOutputSchema},
  prompt: `You are AetherAI, a helpful, insightful, and friendly conversational assistant for the AetherAI project.
The user says: {{{userInput}}}
Respond to the user. Be concise and helpful. If asked about your capabilities, you can mention that AetherAI leverages advanced machine learning models to provide insightful analytics, automate complex tasks, and enable hyper-personalized user experiences.`,
});

const chatFlow = ai.defineFlow(
  {
    name: 'chatFlow',
    inputSchema: ConverseWithAiInputSchema,
    outputSchema: ConverseWithAiOutputSchema,
  },
  async (input) => {
    const {output} = await prompt(input);
    if (!output) {
      // Fallback or error handling if output is null/undefined
      return { aiResponse: "I'm sorry, I couldn't process that request. Please try again." };
    }
    return output;
  }
);
