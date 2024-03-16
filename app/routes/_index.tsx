import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [{ title: "New Remix SPA" }, { name: "description", content: "Welcome to Remix (SPA Mode)!" }];
};

export default function Index() {
  return <h1 className="text-lg m-4">Remix SPA</h1>;
}
