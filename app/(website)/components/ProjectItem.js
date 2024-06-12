"use client"
import Link from "next/link"
import { useRef } from "react"


export default function ProjectItem(props) {
    const project = props.project
    const divRef = useRef(null)
    const slug = project.slug.current.toString()

    function showDescription() {
        divRef.current.classList.remove("hidden")
        divRef.current.classList.add("flex")
        divRef.current.classList.remove("popOut")
        divRef.current.classList.add("popIn")
    }

    function hideDescription() {
        divRef.current.classList.add("hidden")
        divRef.current.classList.remove("flex")
        divRef.current.classList.remove("popIn")
        divRef.current.classList.add("popOut")
    }

    return (
        <div className="relative">
            <p onMouseEnter={showDescription} className="w-24 font-extralight text-lg">{project.date}</p>
            <div ref={divRef} className="hidden flex-col absolute w-96 text-right items-end transition-all">
                <Link href={`/works/${slug}`} onMouseLeave={hideDescription} className="border-b-[1px] border-black w-full -mt-7">
                    <p className="font-normal text-lg">{project.title}</p>
                </Link>
                <div className="w-52 font-light text-lg mt-1">
                    <p>{project.description}</p>
                </div>
            </div>
        </div>
    )
}