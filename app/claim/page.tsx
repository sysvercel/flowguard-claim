"use client"
export const dynamic = "force-dynamic";
import { useSearchParams } from "next/navigation"

export default function ClaimPage() {
  const params = useSearchParams()

  const status = params.get("status")
  const property = params.get("property")
  const claimedBy = params.get("claimed_by")

  const getContent = () => {
    switch (status) {
      case "success":
        return {
          title: "Incident Claimed",
          message: "You have successfully claimed this incident.",
          color: "text-green-500",
        }
      case "already_claimed":
        return {
          title: "Already Claimed",
          message: "This incident has already been claimed.",
          color: "text-yellow-500",
        }
      case "expired":
        return {
          title: "Link Expired",
          message: "This claim link has expired.",
          color: "text-red-500",
        }
      default:
        return {
          title: "Invalid Request",
          message: "Missing or invalid claim information.",
          color: "text-gray-400",
        }
    }
  }

  const content = getContent()

  return (
    <main className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="max-w-md w-full p-8 bg-zinc-900 rounded-2xl border border-zinc-800 text-center">
        <h1 className={`text-2xl font-bold ${content.color}`}>
          {content.title}
        </h1>

        <p className="mt-4 text-zinc-300">
          {content.message}
        </p>

        {(property || claimedBy) && (
          <div className="mt-6 text-sm text-zinc-400 space-y-2">
            {property && <div>Property: {property}</div>}
            {claimedBy && <div>Claimed By: {claimedBy}</div>}
          </div>
        )}

        <div className="mt-8 text-xs text-zinc-500">
          FlowGuard Leak Detection System
        </div>
      </div>
    </main>
  )
}