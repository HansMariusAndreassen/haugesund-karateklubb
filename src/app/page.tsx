import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Welcome to My Website</h1>
      <p className="text-xl">
        This is a sample page using Next.js, React, TypeScript, and shadcn/ui.
      </p>
      <Button>Click me!</Button>
    </main>
  );
}
