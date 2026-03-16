import { PageHeader } from "@/components/page-header";
import { HeroPattern } from "../components/hero-pattern";
import React from 'react'
import { DashboardHeader } from "../components/dashboard-header";
import { TextInputPanel } from "../components/text-input-panel";
import { QuickActionsPanel } from "../components/quick-actions-panel";

/**
 * Renders the dashboard page layout composed of a top PageHeader (hidden on large screens), a HeroPattern, and the main content stack.
 *
 * The main content contains DashboardHeader, TextInputPanel, and QuickActionsPanel arranged vertically with responsive padding and spacing.
 *
 * @returns The JSX element for the dashboard page.
 */
export function DashboardView() {
    return (
        <div className="relative">
            <PageHeader title="Dashboard" className="lg:hidden" />
            <HeroPattern />
            <div className="relative space-y-8 p-4 lg:p-16">
                <DashboardHeader />
                <TextInputPanel /> 
                <QuickActionsPanel />
            </div>
        </div>
    )
}
