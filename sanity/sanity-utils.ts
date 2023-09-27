import { createClient} from "@sanity/client";


export async function getProjects() {
    const client = createClient({
        projectId: 'l2yq8lmm',
        dataset: 'production',
        apiVersion: '2023-09-23',
        useCdn: false
    })

    return client.fetch(`*[_type == "project"]{
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        "image": image.asset -> url,
        url,
        content
    }`)
}

