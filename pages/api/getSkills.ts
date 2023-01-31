import { groq } from 'next-sanity'
import { NextApiRequest, NextApiResponse } from 'next'
import { sanityClient } from '../../sanity'
import type { Skill } from '../../types'

const query = groq`*[_type == "skill"]`

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ skills: Skill[] }>
) {
  const skills: Skill[] = await sanityClient.fetch(query)

  res.status(200).json({ skills })
}
