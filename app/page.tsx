"use client"

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
          color: "bg-green-600",
        }
      case "already_claimed":
        return {
          title: "Already Claimed",
          message: "This incident has already been claimed.",
          color: "bg-yellow-600",
        }
      case "expired":
        return {
          title: "Link Expired",
          message: "This claim link has expired.",
          color: "bg-red-600",
        }
      case "not_available":
        return {
          title: "Not Available",
          message: "This incident is no longer available.",
          color: "bg-yellow-600",
        }
      default:
        return {
          title: "Invalid Link",
          message: "This claim link is not valid.",
          color: "bg-red-600",
        }
    }
  }

  const content = getContent()

  return (
    <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center px-6">
      <div className="max-w-md w-full bg-gray-900 rounded-xl shadow-xl p-8">
        <div className={`text-center py-4 rounded-lg ${content.color}`}>
          <h1 className="text-xl font-bold">{content.title}</h1>
        </div>

        <p className="mt-6 text-gray-300 text-center">
          {content.message}
        </p>

        {property && (
          <div className="mt-6 border-t border-gray-800 pt-4 text-sm text-gray-400">
            <p><strong>Property:</strong> {property}</p>
            {claimedBy && (
              <p><strong>Claimed By:</strong> {claimedBy}</p>
            )}
          </div>
        )}

        <div className="mt-8 text-center text-xs text-gray-600">
          FlowGuard Leak Detection System
        </div>
      </div>
    </div>
  )
}