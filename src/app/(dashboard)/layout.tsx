import { cookies } from "next/headers";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/features/dashboard/components/dashboard-sidebar";

/**
 * Dashboard layout component that initializes sidebar open state from the "sidebar_state" cookie and provides the dashboard shell.
 *
 * @param children - The page content to render inside the layout's main content area.
 * @returns The layout element containing a SidebarProvider (initialized from the "sidebar_state" cookie), the DashboardSidebar, and a main content area that renders `children`.
 */
export default async function Layout({ children }: { children: React.ReactNode }) {
    const cookieStore = await cookies()
    const defaultOpen = cookieStore.get("sidebar_state")?.value === "true"

    return (
        <SidebarProvider defaultOpen={defaultOpen} className="h-svh">
            <DashboardSidebar />
            <SidebarInset className="min-h-0 min-w-0">
                <main className="flex flex-1 flex-col min-h-0 ">
                    {children}
                </main>
            </SidebarInset>
        </SidebarProvider>
    )
}