import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center max-w-xl gap-8">
      <h1 className="text-4xl font-bold">Hello, World!</h1>
      <p>Are you in a sticky situation?</p>
      <Button asChild>
        <Link href="/help">Yes!!!</Link>
      </Button>
    </div>
  );
}
