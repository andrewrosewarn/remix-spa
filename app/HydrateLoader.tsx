import { AiOutlineLoading } from "react-icons/ai";

export default function HydrateLoader() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="flex items-center gap-3 text-gray-500">
        <AiOutlineLoading className="animate-spin" />
        <span>Loading...</span>
      </div>
    </div>
  );
}
