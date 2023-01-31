import type { Social } from '../types'

type Data = {
  socials: Social[]
}

export const fetchSocials = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SANITY_BASE_URL}/api/getSocials`
  )
  const data = await res.json()
  const { socials }: Data = data

  return socials
}
