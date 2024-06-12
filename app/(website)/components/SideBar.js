import { client } from "@/sanity/lib/client";
import Link from "next/link";
import ProjectList from "./ProjectList";

async function getProjects() {
    const query = `
    *[_type == "project"] {
      title,
      description,
      date,
      _id,
      _type,
      slug
    }
    `;
    const data = await client.fetch(query);
    return data
  }

export default async function SideBar() {
    const projects = await getProjects()
    return(
        <div className="flex flex-col gap-10 w-60 fixed">
            <Link href={"/"} className="text-3xl font-semibold">henrique biatto</Link>
            <div className="flex flex-col text-xl gap-2">
            <Link href={"/biography"}>biography</Link>
            <Link href={"/contact"}>contact</Link>
            </div>
            <ProjectList projects={projects}/>
        </div>
    )
}