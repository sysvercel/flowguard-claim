import { Suspense } from "react";
import ClaimClient from "./ClaimClient";

export const dynamic = "force-dynamic";

export default function ClaimPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-black" />}>
      <ClaimClient />
    </Suspense>
  );
}