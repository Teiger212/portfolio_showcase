import type { Project } from '../types'

type Data = {
  projects: Project[]
}

export const fetchProjects = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/getProjects`)
  const data = await res.json()
  const { projects }: Data = data

  return projects
}
