// This file is machine-generated - edit at your own risk.

'use server';

/**
 * @fileOverview Explains AetherAI's capabilities using GenAI.
 *
 * - generateAiExplanation - A function that generates an explanation of AetherAI's capabilities.
 * - GenerateAiExplanationInput - The input type for the generateAiExplanation function.
 * - GenerateAiExplanationOutput - The return type for the generateAiExplanation function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateAiExplanationInputSchema = z.object({
  projectName: z.string().describe('The name of the AI project.'),
});

export type GenerateAiExplanationInput = z.infer<typeof GenerateAiExplanationInputSchema>;

const GenerateAiExplanationOutputSchema = z.object({
  explanation: z.string().describe('A detailed explanation of the AI project and its use cases.'),
});

export type GenerateAiExplanationOutput = z.infer<typeof GenerateAiExplanationOutputSchema>;

export async function generateAiExplanation(input: GenerateAiExplanationInput): Promise<GenerateAiExplanationOutput> {
  return generateAiExplanationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateAiExplanationPrompt',
  input: {schema: GenerateAiExplanationInputSchema},
  output: {schema: GenerateAiExplanationOutputSchema},
  prompt: `You are an AI assistant specialized in explaining AI projects.

  Generate a detailed explanation of the AI project named "{{projectName}}", detailing its functionality and potential use cases.
  The explanation should be clear, concise, and engaging for a general audience.`,
});

const generateAiExplanationFlow = ai.defineFlow(
  {
    name: 'generateAiExplanationFlow',
    inputSchema: GenerateAiExplanationInputSchema,
    outputSchema: GenerateAiExplanationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
