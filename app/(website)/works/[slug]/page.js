import { client } from "@/sanity/lib/client"
import { urlForImage } from "@/sanity/lib/image"
import { PortableText } from "next-sanity"
import Image from "next/image"

async function getPost(slug) {
    const query = `
    *[_type == "project" && slug.current == "${slug}"][0] {
      title,
      date,
      mainImage,
      body
    }
    `

    const post = await client.fetch(query)
    return post
}

export default async function page(params) {
    const post = await getPost(params.params.slug)
    const imageComponent = {
        types: {
            image: ({value}) => <Image src={urlForImage(value)} width={500} height={500} />
        }
    }
    return(
        <div className="flex flex-col w-[60vw] gap-8 text-right pb-20 slideIn">
            <Image src={urlForImage(post.mainImage)} width={1000} height={1000} className="self-end"/>
            <div>
                <p className="text-3xl">{post.title}</p>
                <p className="text-xl font-light">{post.date}</p>
            </div>
            <div className="font-extralight text-lg">
            <PortableText
                value={post.body}
                components={imageComponent}
            />
            </div>
        </div>
    )
}