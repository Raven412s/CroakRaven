"use client"

import { SignIn } from "@clerk/nextjs"
import { motion } from "motion/react"
import React, { JSX } from "react"

export default function SignInPage(): JSX.Element {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">

      {/* background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute  left-1/2 top-[-20%] h-175 w-175 -translate-x-1/2 rounded-full bg-muted-foreground/35 blur-[160px]" />
        <div className="absolute  bottom-[-20%] right-[10%] h-150 w-150 rounded-full bg-muted-foreground/30 blur-[160px]" />
      </div>

      <div className="relative grid min-h-screen grid-cols-1 lg:grid-cols-2">

        {/* LEFT SIDE */}
        <div className="flex flex-col justify-between p-12 lg:p-20">

          {/* logo */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-3"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-card font-semibold">
              CR
            </div>

            <span className="text-lg font-semibold tracking-wide">
              CroakRaven
            </span>
          </motion.div>

          {/* hero copy */}
          <div className="max-w-xl space-y-8">

            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl font-semibold leading-tight tracking-tight"
            >
              Give your apps
              <span className="block text-foreground">
                a human voice
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="text-lg text-muted-foreground/80"
            >
              CroakRaven is the next-generation AI voice engine for builders.
              Generate natural speech, clone voices, and power immersive
              conversational experiences — all from a single platform.
            </motion.p>

            {/* feature highlights */}
              <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="grid grid-cols-2 gap-6 text-sm"
            >

              <div>
                <p className="font-medium text-accent-foreground/80">
                  Hyper-Realistic Voices
                </p>
                <p className="text-muted-foreground/80">
                  AI speech indistinguishable from humans
                </p>
              </div>

              <div>
                <p className="font-medium text-accent-foreground/80">
                  Instant Voice Cloning
                </p>
                <p className="text-muted-foreground/80">
                  Clone voices in seconds
                </p>
              </div>

              <div>
                <p className="font-medium text-accent-foreground/80">
                  Streaming TTS API
                </p>
                <p className="text-muted-foreground/80">
                  Ultra-low latency generation
                </p>
              </div>

              <div>
                <p className="font-medium text-accent-foreground/80">
                  Production Ready
                </p>
                <p className="text-muted-foreground/80">
                  Scalable AI infrastructure
                </p>
              </div>

            </motion.div>

          </div>

          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} CroakRaven
          </div>

        </div>


        {/* RIGHT SIDE */}
        <div className="flex items-center justify-center p-10">

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-md rounded-3xl border border-border/30 bg-card/40 p-6 backdrop-blur-[50px]"
          >

            {/* clerk component */}
            <SignIn
              appearance={{
                elements: {
                  rootBox: "w-full",
                  card: "bg-transparent shadow-none border-0",
                  headerTitle: "text-2xl font-semibold text-foreground",
                  headerSubtitle: "text-muted-foreground/80",
                  formFieldInput:
                    "bg-input/60 border border-border text-foreground placeholder:text-muted-foreground",
                  formButtonPrimary:
                    "bg-primary text-primary-foreground font-semibold",
                  socialButtonsBlockButton:
                    "bg-transparent hover:bg-popover border border-border text-foreground",
                  footerActionLink: "text-muted-foreground hover:text-foreground",
                },
              }}
            />

          </motion.div>

        </div>

      </div>
    </main>
  )
}