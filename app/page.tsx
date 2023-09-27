import { getProjects } from "@/sanity/sanity-utils"

export default async function Home() {
  const projects = await getProjects()
  return (
    <div className="border-slate-200 w-full">
      {projects.map((project) => (
        <div key={project.id}>{project.name}</div>
      ))} 
    </div>  
  )
}
