"use client"

import { buttonVariants, Button } from "@/components/ui/button"
import { Spinner } from "@/components/ui/spinner"
import { VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

interface GenerateButtonProps {
    isSubmitting: boolean
}

export function GenerateButton({
    variant,
    size,
    disabled,
    isSubmitting,
    onClick,
    className,
    ...props
}: React.ComponentProps<"button"> &
    VariantProps<typeof buttonVariants> &
    GenerateButtonProps) {

    return (
        <Button
            variant={variant}
            size={size}
            disabled={disabled || isSubmitting}
            onClick={onClick}
            className={cn(className)}
            {...props}
        >
            {isSubmitting ? <><Spinner className="size-3"/> Generating...</> : "Generate speech"}
        </Button>
    )
}