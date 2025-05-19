
import { generateAiExplanation } from '@/ai/flows/generate-ai-explanation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Lightbulb } from 'lucide-react';

export default async function AiExplanationSection() {
  let explanation = "AetherAI is a cutting-edge artificial intelligence project designed to revolutionize how we interact with technology. It leverages advanced machine learning models to provide insightful analytics, automate complex tasks, and enable hyper-personalized user experiences across various domains.";
  let errorFetchingExplanation = false;

  try {
    const aiData = await generateAiExplanation({ projectName: "AetherAI" });
    if (aiData && aiData.explanation) {
      explanation = aiData.explanation;
    }
  } catch (error) {
    console.error("Failed to generate AI explanation:", error instanceof Error ? error.message : String(error));
    errorFetchingExplanation = true;
    // Fallback explanation is already set
  }

  return (
    <section id="ai-explanation" className="w-full py-16 sm:py-24 bg-secondary">
      <div className="container mx-auto max-w-screen-lg px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            What is Aether<span className="text-primary">AI</span>?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Understanding the core of our intelligent system.
          </p>
        </div>
        
        <Card className="shadow-xl">
          <CardHeader className="flex flex-row items-center space-x-3">
            <Lightbulb className="h-8 w-8 text-primary" />
            <CardTitle className="text-2xl">Intelligent Capabilities</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-base text-muted-foreground leading-relaxed whitespace-pre-line">
              {explanation}
            </p>
            {errorFetchingExplanation && (
              <p className="mt-4 text-sm text-destructive">
                Note: Displaying a default explanation as live generation encountered an issue.
              </p>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
