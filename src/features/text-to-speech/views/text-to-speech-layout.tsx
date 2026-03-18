import { PageHeader } from "@/components/page-header"

export function TextToSpeechLayout({
    children
}:{
    children: React.ReactNode 
}) {
  return (
    <div className="h-full min-h-0 flex flex-col overflow-hidden">
        <PageHeader title="Text to speech"/>
        {children}
    </div>
  )
}
