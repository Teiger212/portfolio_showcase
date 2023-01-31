import { groq } from 'next-sanity'
import { NextApiRequest, NextApiResponse } from 'next'
import { sanityClient } from '../../sanity'
import type { Social } from '../../types'

const query = groq`*[_type == "social"]`

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ socials: Social[] }>
) {
  const socials: Social[] = await sanityClient.fetch(query)

  res.status(200).json({ socials })
}
