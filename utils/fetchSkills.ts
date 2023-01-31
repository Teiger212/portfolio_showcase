import type { Skill } from '../types'

type Data = {
  skills: Skill[]
}

export const fetchSkills = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SANITY_BASE_URL}/api/getSkills`
  )
  const data = await res.json()
  const { skills }: Data = data

  return skills
}
