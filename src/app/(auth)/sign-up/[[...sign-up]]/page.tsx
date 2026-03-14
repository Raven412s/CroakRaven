"use client"

import { SignUp } from "@clerk/nextjs"
import React, { JSX } from "react"

export default function SignUpPage(): JSX.Element {
  return (
    <main className="min-h-screen flex items-center justify-center bg-background text-foreground">

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-[-20%] h-175 w-175 -translate-x-1/2 rounded-full bg-muted/30 blur-[160px]" />
      </div>

      <div className="relative w-full max-w-md rounded-3xl border border-border bg-card/40 backdrop-blur-xl p-6">

        <SignUp
          appearance={{
            elements: {
              rootBox: "w-full",
              card: "bg-transparent shadow-none border-0",
              headerTitle: "text-2xl font-semibold text-foreground",
              headerSubtitle: "text-muted-foreground",
              socialButtonsBlockButton:
                "bg-transparent hover:bg-popover border border-border text-foreground",
              formFieldInput:
                "bg-input border border-border text-foreground placeholder:text-muted-foreground",
              formButtonPrimary: "bg-primary hover:bg-primary/90 text-primary-foreground font-semibold",
              footerActionLink: "text-muted-foreground hover:text-foreground",
            },
          }}
        />

      </div>

    </main>
  )
}