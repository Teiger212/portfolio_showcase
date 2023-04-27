import type { PageInfo } from '../types'

type Data = {
  pageInfo: PageInfo
}

export const fetchPageInfo = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/getPageInfo`)

  const data: Data = await res.json()
  const { pageInfo } = data

  return pageInfo
}
