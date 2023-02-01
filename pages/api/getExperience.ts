import { groq } from 'next-sanity'
import { NextApiRequest, NextApiResponse } from 'next'
import { sanityClient } from '../../sanity'
import type { Experience } from '../../types'

const query = groq`
  *[_type == "experience"] {
  ...,
  technologies[]->
  }
  | order(dateEnded asc)
`

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ experiences: Experience[] }>
) {
  const experiences: Experience[] = await sanityClient.fetch(query)

  res.status(200).json({ experiences })
}
