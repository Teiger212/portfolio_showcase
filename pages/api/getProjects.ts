import { groq } from 'next-sanity'
import { NextApiRequest, NextApiResponse } from 'next'
import { sanityClient } from '../../sanity'
import type { Project } from '../../types'

const query = groq`*[_type == "project"] {
  ...,
  tetchnologies[]->
}`

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ projects: Project[] }>
) {
  const projects: Project[] = await sanityClient.fetch(query)

  res.status(200).json({ projects })
}
