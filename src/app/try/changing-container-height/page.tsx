import { ContainerHeightIssue } from "./issue";

export default function FixPage() {
  return (
    <div className="flex flex-col gap-8 max-w-4xl w-full">
      <div className="grid gap-2">
        <h1 className="text-4xl font-bold">Try...</h1>
        <h2 className="text-3xl pl-8">...changing container height</h2>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-2xl tracking-tighter">What is the issue?</h3>
        <p className="text-balance max-w-xl">
          A sticky element is always gonna follow its container. If you want
          something to be sticky for the entire height of a page, the contaienr
          of the sticky element needs to be the same height as the page, not
          just the screen.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-2xl tracking-tighter">Identify the issue</h3>
        <p className="text-balance max-w-xl"></p>
        <ContainerHeightIssue />
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-2xl tracking-tighter">Solving the issue</h3>
        <p className="text-balance max-w-xl"></p>
      </div>
    </div>
  );
}
