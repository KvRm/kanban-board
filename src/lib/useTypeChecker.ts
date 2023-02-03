import { Link } from '../components/Link'
import { Tag } from '../typings/tag'

export const isLinkType = (value: unknown): value is Link =>
  !!((value as Link)?.type && (value as Link)?.id && (value as Link)?.title)

export const isTagType = (value: unknown): value is Tag =>
  !!(
    (value as Tag)?.type !== null &&
    (value as Tag)?.type !== undefined &&
    (value as Tag)?.label
  )
