import { Sparkles } from "lucide-react";

export const HeroSection = () => {
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric"
  });

  return (
    <section className="relative py-8 md:py-12">
      <div className="animate-fade-in">
        <div className="flex items-center gap-2 text-muted-foreground mb-2">
          <Sparkles className="w-4 h-4 text-accent" />
          <span className="text-sm">{formattedDate}</span>
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
          Stay on top of your
          <span className="block text-primary">life admin</span>
        </h1>
        <p className="mt-4 text-muted-foreground text-lg max-w-xl">
          Never miss a deadline again. Track documents, bills, health checkups, and exam forms all in one place.
        </p>
      </div>
    </section>
  );
};
