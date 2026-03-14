import ReloadTableButton from "@/components/table_components/reload-table";
import { prisma } from "@/lib/db"


export default async function TestPage() {
    const voices = await prisma.voice.findMany();
    return (
        <div className="p-8">
            <div className="flex items-center gap-8 justify-between">            
                <h3 className="text-xl font-medium mb-4">These are the found voices: {voices.length}</h3>
                <ReloadTableButton/>
            </div>
            <div className="overflow-auto">
                <table className="min-w-full border-collapse">
                    <thead>
                        <tr className="bg-gray-50">
                            <th className="px-4 py-2 text-left text-sm font-medium">ID</th>
                            <th className="px-4 py-2 text-left text-sm font-medium">Org ID</th>
                            <th className="px-4 py-2 text-left text-sm font-medium">Name</th>
                            <th className="px-4 py-2 text-left text-sm font-medium">Description</th>
                            <th className="px-4 py-2 text-left text-sm font-medium">Category</th>
                            <th className="px-4 py-2 text-left text-sm font-medium">Language</th>
                            <th className="px-4 py-2 text-left text-sm font-medium">Variant</th>
                            <th className="px-4 py-2 text-left text-sm font-medium">R2 Object ID</th>
                            <th className="px-4 py-2 text-left text-sm font-medium">Created At</th>
                            <th className="px-4 py-2 text-left text-sm font-medium">Updated At</th>
                        </tr>
                    </thead>
                    <tbody>
                        {voices.map((voice) => (
                            <tr key={voice.id} className="odd:bg-white even:bg-gray-50">
                                <td className="px-4 py-2 text-sm">{voice.id}</td>
                                <td className="px-4 py-2 text-sm">{voice.orgId}</td>
                                <td className="px-4 py-2 text-sm">{voice.name}</td>
                                <td className="px-4 py-2 text-sm">{voice.description}</td>
                                <td className="px-4 py-2 text-sm">{voice.category}</td>
                                <td className="px-4 py-2 text-sm">{voice.language}</td>
                                <td className="px-4 py-2 text-sm">{voice.variant}</td>
                                <td className="px-4 py-2 text-sm">{voice.r2ObjectId}</td>
                                <td className="px-4 py-2 text-sm">{voice.createdAt?.toDateString()}</td>
                                <td className="px-4 py-2 text-sm">{voice.updatedAt?.toDateString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
