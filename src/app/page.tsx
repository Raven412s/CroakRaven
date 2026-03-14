import { OrganizationSwitcher, UserButton } from '@clerk/nextjs'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center gap-4 bg-background">
      <h1 className='text-2xl font-semibold'>Welcome to Croak Raven</h1>
      <div className="flex gap-4 items-center justify-between">
        <OrganizationSwitcher />
        <UserButton />
      </div>
    </div>
  );
}
