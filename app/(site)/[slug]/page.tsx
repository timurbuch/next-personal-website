import { getPage } from "@/sanity/sanity-utils"
import { PortableText } from "@portabletext/react"

type Props = {
    params: { slug: string}
}

export default async function Page({params}: Props) {
    const page = await getPage(params.slug)
    return(
        <div>
            <h1 className="orange_gradient text-5xl drop-shadow font-extrabold">{page.title}</h1>

            <div className="text-lg text-slate-100 mt-10">
                <PortableText value={page.content}/>
            </div>
        </div>
    )

}