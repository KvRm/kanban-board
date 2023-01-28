import { Link } from '../components/Link'

export const isLinkType = (value: unknown): value is Link =>
  !!((value as Link)?.type && (value as Link)?.id && (value as Link)?.title)
