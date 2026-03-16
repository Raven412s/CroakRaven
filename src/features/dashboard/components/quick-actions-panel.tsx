import { quickActions } from "../data/quick-actions"
import { QuickActionCard } from "./quick-action-card"
 
/**
 * Render a titled panel containing a responsive grid of quick action cards.
 *
 * Maps the predefined quickActions data to QuickActionCard components and arranges them in a responsive grid layout.
 *
 * @returns The panel as a JSX element containing the heading and the grid of action cards.
 */
export function QuickActionsPanel() {
  return (
    <div className="space-y-4">
        <h2 className="text-lg font-semibold">Quick actions</h2>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {quickActions.map((action)=>{
                return <QuickActionCard key={action.title} title={action.title} gradient={action.gradient} description={action.description} href={action.href} />
            })}
        </div>
    </div>
  )
}
