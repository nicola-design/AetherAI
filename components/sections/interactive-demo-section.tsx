
"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { BarChart3, MessageSquareText, ImageIcon } from 'lucide-react';

export default function InteractiveDemoSection() {
  return (
    <section id="demo" className="w-full py-16 sm:py-24 bg-secondary">
      <div className="container mx-auto max-w-screen-lg px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            Experience Aether<span className="text-primary">AI</span> in Action
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay:0.1, ease: "easeOut" }}
            className="mt-4 text-lg text-muted-foreground"
          >
            See how AetherAI can be applied in various scenarios.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Tabs defaultValue="analysis" className="w-full">
            <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 gap-2 h-auto sm:h-12 mb-8 bg-background/30 p-2 rounded-lg">
              <TabsTrigger value="analysis" className="py-2.5 text-sm sm:text-base data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <BarChart3 className="mr-2 h-5 w-5" /> Data Analysis
              </TabsTrigger>
              <TabsTrigger value="generation" className="py-2.5 text-sm sm:text-base data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <MessageSquareText className="mr-2 h-5 w-5" /> Content Generation
              </TabsTrigger>
              <TabsTrigger value="recognition" className="py-2.5 text-sm sm:text-base data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <ImageIcon className="mr-2 h-5 w-5" /> Image Recognition
              </TabsTrigger>
            </TabsList>

            <Card className="overflow-hidden shadow-xl">
              <CardContent className="p-0">
                <TabsContent value="analysis" className="mt-0">
                  <div className="p-6 md:p-8 min-h-[300px] flex flex-col items-center justify-center bg-card">
                    <h3 className="text-xl font-semibold text-foreground mb-4">Insightful Data Analysis</h3>
                    <p className="text-muted-foreground mb-6 text-center max-w-md">
                      AetherAI processes vast datasets to uncover hidden patterns and deliver actionable insights.
                    </p>
                    <Image
                      src="https://placehold.co/600x300.png"
                      alt="Data Analysis Mockup"
                      width={600}
                      height={300}
                      data-ai-hint="data chart"
                      className="rounded-lg shadow-md border border-border"
                    />
                  </div>
                </TabsContent>
                <TabsContent value="generation" className="mt-0">
                  <div className="p-6 md:p-8 min-h-[300px] flex flex-col items-center justify-center bg-card">
                    <h3 className="text-xl font-semibold text-foreground mb-4">Automated Content Generation</h3>
                    <p className="text-muted-foreground mb-6 text-center max-w-md">
                      Generate high-quality text for various applications, from articles to summaries.
                    </p>
                     <Image
                      src="https://placehold.co/600x300.png"
                      alt="Content Generation Mockup"
                      width={600}
                      height={300}
                      data-ai-hint="text document"
                      className="rounded-lg shadow-md border border-border"
                    />
                  </div>
                </TabsContent>
                <TabsContent value="recognition" className="mt-0">
                 <div className="p-6 md:p-8 min-h-[300px] flex flex-col items-center justify-center bg-card">
                    <h3 className="text-xl font-semibold text-foreground mb-4">Advanced Image Recognition</h3>
                    <p className="text-muted-foreground mb-6 text-center max-w-md">
                      Identify objects, scenes, and patterns within images with high accuracy.
                    </p>
                     <Image
                      src="https://placehold.co/600x300.png"
                      alt="Image Recognition Mockup"
                      width={600}
                      height={300}
                      data-ai-hint="abstract technology"
                      className="rounded-lg shadow-md border border-border"
                    />
                  </div>
                </TabsContent>
              </CardContent>
            </Card>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
}
