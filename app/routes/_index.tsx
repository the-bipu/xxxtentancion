import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "XXXTENTANCION" },
    { name: "description", content: "Welcome to XXXTENTANCION!" },
  ];
};

export default function Index() {
  return (
    <div className="flex h-screen items-center justify-center bg-tentan">
      <div className="flex flex-col items-center gap-16">

        <header className="flex flex-col items-center gap-9">
          changes
        </header>

      </div>
    </div>
  );
}