"use client";

import dynamic from "next/dynamic";
import { Spinner } from "@/frontend/components/ui/spinner";

const App = dynamic(() => import("@/frontend/app"), {
  loading: () => (
    <div className="flex items-center justify-center min-h-screen">
      <Spinner />
    </div>
  ),
  ssr: false,
});

export default function Home() {
  return <App />;
}
