import { createClient} from "@sanity/client";


export async function getProjects() {
    const client = createClient({
        projectId: 'l2yq8lmm',
        dataset: 'production',
        apiVersion: '2023-04-23',
    })

    return client.fetch(`*[_type == "product"]{
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        "image": image.asset --> url,
        url,
        content
    }`)
}

