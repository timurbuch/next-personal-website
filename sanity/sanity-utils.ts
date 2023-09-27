import { Project } from "@/types/Project";
import { Page } from "@/types/Page";
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
    return createClient(clientConfig).fetch(`*[_type == "project" && slug.current == $slug][0]{
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        "image": image.asset->url,
        url,
        content
      }`, 
    {slug}
    )
}

export async function getPages(): Promise<Page[]> {
    return createClient(clientConfig).fetch(`*[_type == "page"]{
        _id,
        _createdAt,
        title,
        "slug": slug.current
    }`)
}

export async function getPage(slug: string): Promise<Page> {
    return createClient(clientConfig).fetch(`*[_type == "page" && slug.current == $slug][0]{
        _id,
        _createdAt,
        title,
        "slug": slug.current,
        content
      }`, 
    {slug}
    )
}
   