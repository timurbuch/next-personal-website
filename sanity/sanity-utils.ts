import { Project } from "@/types/Project";
import { createClient} from "@sanity/client";
import config from './client-config'

export async function getProjects(): Promise<Project[]> {
    const client = createClient(config)

    return client.fetch(`*[_type == "project"]{
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
    const client = createClient(config)

    return client.fetch(`*[_type == "project && slug.current == ${slug}[0]"]{
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

