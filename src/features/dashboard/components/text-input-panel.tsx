"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { TEXT_MAX_LENGTH } from "@/features/text-to-speech/data/constants"
import { Coins } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"

/**
 * Renders a text input panel with live character count and cost estimation, and navigates to the text-to-speech page when the user generates speech.
 *
 * The component enforces a maximum input length, updates an internal text state, displays an estimated cost based on character count, and disables the generate button when the trimmed input is empty.
 *
 * @returns A React element containing a textarea bound to local state, a badge showing cost or a prompt to start typing, a character count, and a "Generate speech" button that navigates to `/text-to-speech?text={encodedText}` when clicked.
 */
export function TextInputPanel() {
    const [text, setText] = useState<string>("")
    const router = useRouter()

    const handleGenerate = () => {
        const trimmed = text.trim()
        if (!trimmed) return;

        router.push(`/text-to-speech?text=${encodeURIComponent(trimmed)}`)
    }
    return (
        <div className="
        rounded-[22px] bg-linear-185 from-[#ff8ee3] from-15% via-[#57d7e0] via-39% to-[#dbf1f2] to-85% p-0.5 shadow-[0_0_0_4px_white]
        ">
            <div className="rounded-[20px] bg-[#f9f9f9] p-1">
                <div className="space-y-4 rounded-2xl bg-white p-4 drop-shadow-xs">
                    <Textarea
                        placeholder="Start typing or paste your text here..."
                        className="min-h-35 resize-none border-0 bg-transparent p-0 shadow-none focus-visible:ring-0"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        maxLength={TEXT_MAX_LENGTH}
                    />


                    <div className="flex items-center justify-between">
                        <Badge variant={"outline"} className="gap-1.5 border-dashed">
                            <Coins className="size-3 text-chart-5" />
                            <span className="text-xs">
                                {
                                    text.length === 0 ? (
                                        "Start typing to estimate"
                                    ) : (
                                        <>
                                            <span className="tabular-nums">
                                                ${(text.length * 0.0003).toFixed(4)}
                                            </span>{" "}
                                            estimated
                                        </>
                                    )
                                }
                            </span>
                        </Badge>
                        <span className="text-xs text-muted-foreground">
                            {text.length.toLocaleString()} / {TEXT_MAX_LENGTH.toLocaleString()} characters
                        </span>
                    </div>
                </div>
                <div className="flex items-center justify-end p-3 ">
                    <Button 
                    size={"sm"}
                    disabled={!text.trim()}
                    onClick={handleGenerate}
                    className="w-full lg:w-auto"
                    >
                        Generate speech
                    </Button>
                </div>
            </div>
        </div>
    )
}