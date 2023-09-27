import { Project } from "@/types/Project";
import { createClient} from "@sanity/client";
import clientConfig from './config/client-config'

export async function getProjects(): Promise<Project[]> {
    return createClient(clientConfig).fetch(`*[_type == "project"]{
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        "image": image.asset -> url,
        alt,
        url,
        content
    }`)
}

export async function getProject(slug: string): Promise<Project> {
    return createClient(clientConfig).fetch(`*[_type == "project && slug.current == ${slug}[0]"]{
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        "image": image.asset -> url,
        alt,
        url,
        content
    }`, 
    {slug}
    )
}

