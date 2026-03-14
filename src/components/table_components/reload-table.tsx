"use client"

import React from 'react'

type Props = {
  onReload?: () => Promise<void>
  fetchUrl?: string
}

export default function ReloadTableButton({ onReload, fetchUrl }: Props) {
  const [loading, setLoading] = React.useState(false)

  async function handleClick() {
    setLoading(true)
    try {
      if (onReload) {
        await onReload()
      } else if (fetchUrl) {
        await fetch(fetchUrl, { cache: "no-store" })
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <button
      onClick={handleClick}
      className="px-3 py-1 rounded bg-blue-600 text-white text-sm hover:bg-blue-700 disabled:opacity-60"
      disabled={loading}
    >
      {loading ? "Reloading..." : "Reload"}
    </button>
  )
}
