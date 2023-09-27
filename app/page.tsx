import { getProjects } from '@/sanity/sanity-utils';
import Image from 'next/image';

export default async function Home() {
  const projects = await getProjects();
  return (
    <div className="max-w-5xl mx-auto py-20">
      <h1 className="text-7xl font-extrabold">
        Hello I&apos;m{' '}
        <span className="bg-gradient-to-r from-amber-400 via-purple-500 to bg-red-400 bg-clip-text text-transparent">
          Timur
        </span>
      </h1>
      <p className="mt-3 text-xl text-slate-200">
        Hello guys and gals this is a fun little app to show off my recent
        projects!
      </p>
      <h2 className="mt-24 font-bold text-slate-100 text-3xl">My Projects</h2>
      <div className="mt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project._id} className="border border-slate-300 rounded-lg p-3">
            {project.image && (
              <Image
                src={project.image}
                alt={project.alt}
                width={250}
                height={100}
                className="object-cover rounded-lg border border-slate-300"
              />
            )}
            <div className="font-extrabold bg-gradient-to-r from-amber-400 via-purple-500 to bg-red-400 bg-clip-text text-transparent">
              {project.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
