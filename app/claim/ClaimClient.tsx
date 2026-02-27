"use client";

import { useSearchParams } from "next/navigation";

export default function ClaimClient() {
  const params = useSearchParams();

  const status = params.get("status");
  const property = params.get("property");
  const claimedBy = params.get("claimed_by");

  const getContent = () => {
    switch (status) {
      case "success":
        return {
          title: "Incident Claimed",
          message: "You have successfully claimed this incident.",
          color: "text-green-500",
        };
      case "already_claimed":
        return {
          title: "Already Claimed",
          message: "This incident has already been claimed.",
          color: "text-yellow-500",
        };
      case "expired":
        return {
          title: "Link Expired",
          message: "This claim link has expired.",
          color: "text-red-500",
        };
      default:
        return {
          title: "Invalid Link",
          message: "This claim link is not valid.",
          color: "text-red-500",
        };
    }
  };

  const content = getContent();

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white p-6">
      <div className="w-full max-w-md rounded-2xl bg-zinc-900/60 border border-white/10 shadow-2xl p-8 text-center">
        <h1 className={`text-3xl font-bold mb-2 ${content.color}`}>{content.title}</h1>
        <p className="text-white/80 mb-6">{content.message}</p>

        {property && (
          <p className="text-white/60 text-sm mb-2">
            Property: <span className="text-white/80">{property}</span>
          </p>
        )}

        {claimedBy && (
          <p className="text-white/60 text-sm mb-8">
            Claimed By: <span className="text-white/80">{claimedBy}</span>
          </p>
        )}

        <p className="text-white/30 text-xs">FlowGuard Leak Detection System</p>
      </div>
    </div>
  );
}