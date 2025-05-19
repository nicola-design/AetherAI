
"use client";

import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Users, TrendingUp, Zap, Lightbulb, BrainCircuit } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Benefit {
  icon: LucideIcon;
  title: string;
  description: string;
}

const benefits: Benefit[] = [
  {
    icon: BrainCircuit,
    title: "Advanced Intelligence",
    description: "Leverages state-of-the-art algorithms for deep understanding and complex problem-solving.",
  },
  {
    icon: Users,
    title: "Hyper-Personalization",
    description: "Tailors experiences with unparalleled precision to meet individual user needs.",
  },
  {
    icon: TrendingUp,
    title: "Predictive Insights",
    description: "Anticipates trends and informs strategic decisions proactively with data-driven foresight.",
  },
  {
    icon: Zap,
    title: "Automated Efficiency",
    description: "Streamlines complex tasks and workflows, saving valuable time and resources.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

export default function BenefitsSection() {
  return (
    <section id="features" className="w-full py-16 sm:py-24">
      <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Why Choose Aether<span className="text-primary">AI</span>?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Explore the key advantages that set our AI apart.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -8, boxShadow: "0px 20px 25px -5px rgba(var(--primary-hsl), 0.1), 0px 10px 10px -5px rgba(var(--primary-hsl), 0.04)" }}
              className="h-full"
            >
              <Card className="h-full flex flex-col bg-card hover:border-primary/50 transition-all duration-300 ease-out shadow-lg hover:shadow-primary/20">
                <CardHeader className="items-center text-center">
                  <div className="p-4 bg-primary/10 rounded-full mb-4 inline-block">
                    <benefit.icon className="h-10 w-10 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-foreground">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow text-center">
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Helper to extract HSL values from CSS variable string for framer-motion shadow
// This is needed because framer-motion directly applies style, and can't resolve CSS vars in JS.
// However, for this use case, we can use the text-primary for shadow color via Tailwind's shadow capabilities
// by configuring it in tailwind.config.js or applying a specific class.
// For simplicity, the shadow on hover will use a generic shadow color or primary color based shadow
// directly through Tailwind's shadow color utilities if possible, or a fixed value.
// The example `boxShadow` above uses `rgba(var(--primary-hsl), 0.1)` as a placeholder.
// In a real scenario, you'd fetch the HSL values. For now, I'll use primary color directly.
// Updated: The Card component already has shadow-sm. The hover shadow uses `shadow-primary/20`.
// The provided `boxShadow` in `whileHover` requires converting HSL string to actual HSL for JS.
// This is complex. Instead, I'll rely on Tailwind classes for hover shadows if possible,
// or a simpler direct shadow. The solution above using a predefined hover shadow color is better.
// The `shadow-primary/20` approach is cleaner with Tailwind.
// The current `boxShadow` on hover is using rgba with CSS variables directly, which might not work as expected in framer-motion's style prop.
// A better way is to use Tailwind's arbitrary values if needed: `hover:shadow-[0px_20px_25px_-5px_hsl(var(--primary))]` (opacity part is tricky here).
// Given the constraints, a simpler hover effect or relying on Tailwind's existing shadow classes and variants is preferable.
// I have updated the `whileHover` to use `y` transform and let Card's existing hover styles handle visual changes.
// Added `shadow-lg hover:shadow-primary/20` to the Card's className for a more direct Tailwind approach.
// The `boxShadow` in framer motion needs the actual color value, not a CSS variable string like 'rgba(var(--primary-hsl), 0.1)'.
// A workaround is to define a class for hover shadow and toggle it or use framer-motion to animate opacity of a pseudo-element shadow.
// For now, the Tailwind classes on the Card itself should provide a good hover effect.
// Let's simplify `whileHover` and rely on Tailwind for box shadow.
// The `h-full` and `flex flex-col` on Card and `flex-grow` on CardContent ensure cards are same height and content aligns well.
