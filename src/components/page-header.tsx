import { Headphones, ThumbsUp } from 'lucide-react'
import Link from 'next/link'
import { Button } from './ui/button'
import { SidebarTrigger } from './ui/sidebar'
import { cn } from '@/lib/utils'


/**
 * Renders a header bar containing a sidebar trigger, a title, and two action buttons.
 *
 * The action buttons are outline-styled, wrap `mailto:` links, and show text labels only on large screens.
 *
 * @param title - Text to display as the header title
 * @param className - Optional additional CSS class names appended to the container
 * @returns The header bar as a JSX element
 */
export function PageHeader({
    title,
    className
}: {
    title: string,
    className?: string
}) {
    return (
        <div className={cn(
            "flex items-center justify-between border-b p-4",
            className
        )}>
            <div className="flex items-center gap-2">
                <SidebarTrigger />
                <h1 className='text-lg font-semibold tracking-tight'>{title}</h1>
            </div>
            <div className="flex items-center gap-3">
                <Button variant={"outline"} size={"sm"} asChild>
                    <Link href={"mailto:being.ashutosh16.20@gmail.com"}>
                        <ThumbsUp className='' />
                        <span className='hidden lg:block'>Feedback</span>
                    </Link>
                </Button>
                <Button variant={"outline"} size={"sm"} asChild>
                    <Link href={"mailto:being.ashutosh16.20@gmail.com"}>
                        <Headphones className='' />
                        <span className='hidden lg:block'>Need Help?</span>
                    </Link>
                </Button>
            </div>
        </div>
    )
}
