import type { Experience } from '../types'

type Data = {
  experiences: Experience[]
}

export const fetchExperiences = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/getExperience`)
  const data = await res.json()
  const { experiences }: Data = data

  return experiences
}
