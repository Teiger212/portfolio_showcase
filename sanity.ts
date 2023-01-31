import { createClient } from 'next-sanity'
import createImageUrlBuilder from '@sanity/image-url'
import type { Image } from './types'

export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID!,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '1',
  useCdn: typeof document !== 'undefined',
}

export const sanityClient = createClient(config)

export const urlFor = (source: any) =>
  createImageUrlBuilder(config).image(source)
