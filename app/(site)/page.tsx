import { getProjects } from '@/sanity/sanity-utils';
import Image from 'next/image';
import Link from 'next/link';

export default async function Home() {
  const projects = await getProjects();
  return (
    <div>
      <h1 className="text-7xl font-extrabold">
        Hello I&apos;m{' '}
        <span className="bg-gradient-to-r from-amber-400 via-purple-500 to bg-red-400 bg-clip-text text-transparent">
          Timur
        </span>
      </h1>
      <p className="mt-3 text-xl text-slate-200">
      Crafting captivating web experiences through code and creativity
      </p>
      <h2 className="mt-24 font-bold text-slate-100 text-3xl">My Projects</h2>
      <div className="mt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Link href={`/projects/${project.slug}`} key={project._id} className="border-2 border-slate-500 rounded-lg p-1 hover:scale-105 hover:border-gray-400 transition">
            {project.image && (
              <Image
                src={project.image}
                alt={project.alt}
                width={750}
                height={300}
                className="object-cover rounded-lg border border-slate-500"
              />
            )}
            <div className="font-extrabold orange_gradient">
              {project.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
