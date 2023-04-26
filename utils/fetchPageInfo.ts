import type { PageInfo } from '../types'

type Data = {
  pageInfo: PageInfo
}

export const fetchPageInfo = async () => {
  console.log(
    'fetchPageInfo - base URL',
    process.env.NEXT_PUBLIC_SANITY_BASE_URL
  )
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SANITY_BASE_URL}/api/getPageInfo`
  )
  const data = await res.json()
  const { pageInfo }: Data = data

  return pageInfo
}
