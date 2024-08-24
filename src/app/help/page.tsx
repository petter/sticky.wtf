import Image from "next/image";
import Link from "next/link";

import { scenarios } from "./scenarios";

export default function HelpPage() {
  return (
    <div className="flex flex-col gap-8 items-center">
      <h1 className="text-4xl font-bold">What is happening?</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {scenarios.map((scenario) => (
          <Link
            href={`/help/${scenario.slug}`}
            key={scenario.slug}
            className="flex flex-col gap-2 bg-white rounded-xl p-2 max-w-sm shadow border border-slate-200 hover:scale-105 transition-transform"
          >
            <div className="h-64 flex items-center justify-center">
              <Image src={scenario.img} alt="" height="250" width="250" />
            </div>
            <p className="py-2 px-4 font-bold text-xl">
              {scenario.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
