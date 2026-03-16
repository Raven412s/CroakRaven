"use client"

import { usePathname } from 'next/navigation'
import Image from 'next/image'
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarRail,
    SidebarTrigger
} from '@/components/ui/sidebar'
import { Skeleton } from '@/components/ui/skeleton'
import {
    OrganizationSwitcher,
    UserButton,
    useClerk
} from '@clerk/nextjs'
import {
    type LucideIcon,
    Home,
    LayoutGrid,
    AudioLines,
    Volume2,
    Settings,
    Headphones
} from 'lucide-react'
import Link from 'next/link'

interface MenuItem {
    title: string;
    url?: string;
    icon: LucideIcon;
    onClick?: () => void
}

interface NavSectionProps {
    label?: string;
    items: MenuItem[];
    pathname: string
}

/**
 * Renders a grouped navigation section inside the sidebar with an optional uppercase label and a list of menu items.
 *
 * Each item is rendered as a menu button that links when `item.url` is provided or invokes `item.onClick` otherwise.
 * The component marks an item active when its `url` equals "/" and `pathname` is exactly "/", or when `url` is not "/" and `pathname` starts with `url`.
 *
 * @param label - Optional section label rendered in uppercase above the items
 * @param items - Array of menu items; each item provides `title`, optional `url`, `icon`, and optional `onClick`
 * @param pathname - Current path used to determine which item is active
 * @returns The sidebar group element containing the label (if any) and its menu items
 */
function NavSection({ label, items, pathname }: NavSectionProps) {
    return (
        <SidebarGroup>
            {label && (
                <SidebarGroupLabel className='text-[13px] uppercase text-muted-foreground'>
                    {label}
                </SidebarGroupLabel>
            )}
            <SidebarGroupContent>
                <SidebarMenu>
                    {items.map((item) => (
                        <SidebarMenuItem key={item.title}>
                            <SidebarMenuButton
                                asChild={!!item.url}
                                isActive={
                                    item.url
                                        ? item.url === "/"
                                            ? pathname === "/"
                                            : pathname.startsWith(item.url)
                                        : false
                                }
                                onClick={item.onClick}
                                tooltip={item.title}
                                className='h-9 px-3 py-2 text-[13px] tracking-tight font-medium border border-transparent data-[active=true]:border-border data-[active=true]:shadow-[0px_1px_1px_0px_rgba(44,54,53,0.05),inset_0px_0px_0px_2px_white]'
                            >
                                {
                                    item.url ?
                                        <Link href={item.url}>
                                            <item.icon />
                                            {item.title}
                                        </Link>
                                        :
                                        <>
                                            <item.icon />
                                            {item.title}
                                        </>
                                }
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>
    )
}


/**
 * Renders the dashboard sidebar with navigation sections, an organization switcher, and user controls.
 *
 * The sidebar includes primary navigation (Dashboard, Explore Voice, Text to Speech, Voice Cloning),
 * an "Others" section (Settings, Help & Support), Clerk-powered OrganizationSwitcher and UserButton
 * with skeleton fallbacks, and supports collapsible icon mode with active-route highlighting.
 *
 * @returns The sidebar React element to include in the application layout
 */
export function DashboardSidebar() {
    const pathname = usePathname()
    const clerk = useClerk()

    const mainMenuItems: MenuItem[] = [
        {
            title: "Dashboard",
            url: "/",
            icon: Home
        },
        {
            title: "Explore Voice",
            url: "/voices",
            icon: LayoutGrid
        },
        {
            title: "Text to Speech",
            url: "/text-to-speech",
            icon: AudioLines
        },
        {
            title: "Voice Cloning",
            icon: Volume2
        },
    ]

    const othersMenuItems: MenuItem[] = [
        {
            title: "Settings",
            icon: Settings,
            onClick: () => clerk.openOrganizationProfile()
        },
        {
            title: "Help & Support",
            url: "mailto:being.ashutosh16.20@gmail.com",
            icon: Headphones
        },
    ]

    return (
        <Sidebar collapsible='icon' className='min-w-12'>
            <SidebarHeader className='flex flex-col gap-4 pt-4'>
                <div className="flex items-center gap-2 pl-1 group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:pl-0">
                    <Image
                        src={"/Logo.svg"}
                        alt='CroakRaven'
                        width={64}
                        height={64}
                        className='object-cover'
                    />

                    <span className='text-[#040a30] text-lg font-bold capitalize tracking-wide leading-tight group-data-[collapsible=icon]:hidden'>Croak Raven</span>
                    <SidebarTrigger className='ml-auto lg:hidden' />
                </div>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <OrganizationSwitcher
                            hidePersonal
                            fallback={
                                <Skeleton
                                    className='group-data-[collapsible=icon]:size-8 w-full h-8 border  rounded-md'
                                />
                            }
                            appearance={{
                                elements: {
                                    rootBox: "w-full! group-data-[collapsible=icon]:w-auto! group-data-[collapsible=icon]:flex! group-data-[collapsible=icon]:justify-center! ",
                                    organizationSwitcherTrigger: "w-full! h-9! justify-between! bg-sidebar-accent! border! border-border! rounded-md! pl-1! pr-2! py-1! gap-3! group-data-[collapsible=icon]:w-auto! group-data-[collapsible=icon]:p-1! shadow-[0px_1px_1px_0px_rgba(44,54,53,0.05),inset_0px_0px_0px_2px_white]!",
                                    organizationPreview: "gap-2!",
                                    organizationPreviewAvatarBox: "size-6! rounded-sm!",
                                    organizationPreviewTextContainer: "text-xs! tracking-tight! font-medium! text-foreground! group-data-[collapsible=icon]:hidden!",
                                    organizationPreviewMainIdentifier: "text-[13px]! ",
                                    organizationSwitcherTriggerIcon: "size-4! text-sidebar-foreground! group-data-[collapsible=icon]:hidden!"
                                }
                            }}
                        />
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <div className="border-b border-border border-dashed" />
            <SidebarContent className='justify-between py-3'>
                <NavSection items={mainMenuItems} pathname={pathname} />
                <NavSection label='Others' items={othersMenuItems} pathname={pathname} />
            </SidebarContent>
            <div className="border-b border-border border-dashed" />
            <SidebarFooter className='gap-3 py-3'>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <UserButton
                            showName
                            fallback={
                                <Skeleton className="group-data-[collapsible=icon]:size-8 w-full h-8 border border-border rounded-md" />
                            }
                            appearance={{
                                elements: {
                                    rootBox:
                                        "w-full! group-data-[collapsible=icon]:w-auto! group-data-[collapsible=icon]:flex! group-data-[collapsible=icon]:justify-center!",

                                    userButtonTrigger:
                                        "w-full! flex! items-center! justify-between!  border! border-neutral-200! rounded-md! shadow-[0px_1px_1px_0px_rgba(44,54,53,0.05),inset_0px_0px_0px_2px_white]! p-2! gap-2! group-data-[collapsible=icon]:p-1!",

                                    userButtonAvatarBox:
                                        "size-8! group-data-[collapsible=icon]:size-5.5! rounded-sm!",

                                    userButtonOuterIdentifier:
                                        "text-sm! font-bold! text-sidebar-foreground! tracking-tight! group-data-[collapsible=icon]:hidden!",

                                    userButtonBox: "flex-row-reverse! gap-2!"
                                }
                            }}
                        />
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    )
}
