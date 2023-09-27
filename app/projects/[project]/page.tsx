import { getProject } from "@/sanity/sanity-utils"

type Props = {
    params: {project:string}
}


export default async function Project({params}: Props) {
    const slug = params.project
    const project = await getProject(slug)

    return <div className="max-w-3xl mx-auto py-20">
        <header className="flex items-center justify-between">
            <h1 className="bg-gradient-to-r from-amber-400 via-purple-500 to bg-red-400 bg-clip-text text-transparent text-5xl drop-shadow font-extrabold">{project.name}</h1>
            <a href={project.url} title="View Project" target="_blank" rel="noopener noreferrer" className="bg-blue-600 rounded-lg text-blue-50 font-bold py-3 px-4 whitespace-nowrap hover:bg-blue-100 hover:text-blue-900 transition">View Project</a>
        </header>
        </div>
}