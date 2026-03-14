import { OrganizationList } from '@clerk/nextjs'

export default function OrgSelectionPage() {
    return (
        <div className='flex min-h-screen items-center justify-center mx-auto bg-background text-foreground'>
            <OrganizationList
                hidePersonal={true}
                afterCreateOrganizationUrl={"/"}
                afterSelectOrganizationUrl={"/"}
                appearance={{
                    elements: {
                        rootBox: "mx-auto",
                        card: "shadow-lg bg-card"
                    }
                }}
            />
        </div>
    )
}
