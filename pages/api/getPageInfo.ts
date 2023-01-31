import { groq } from 'next-sanity'
import { NextApiRequest, NextApiResponse } from 'next'
import { sanityClient } from '../../sanity'
import type { PageInfo } from '../../types'

const query = groq`*[_type == "pageInfo"][0]`

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ pageInfo: PageInfo }>
) {
  const pageInfo: PageInfo = await sanityClient.fetch(query)

  res.status(200).json({ pageInfo })
}
