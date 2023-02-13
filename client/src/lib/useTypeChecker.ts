import { Link, TaskLink } from '../components/Link'
import { Tag } from '../typings/tag'

export const useTypeChecker = () => {
  const isLinkType = (value: unknown): value is Link =>
    !!((value as Link)?.type && (value as Link)?.id && (value as Link)?.title)

  const isTaskLink = (value: Link | TaskLink): value is TaskLink =>
    !!((value as TaskLink)?.prefix && (value as TaskLink)?.board?.id)

  const isTagType = (value: unknown): value is Tag =>
    !!(
      (value as Tag)?.type !== null &&
      (value as Tag)?.type !== undefined &&
      (value as Tag)?.label
    )

  return { isLinkType, isTagType, isTaskLink }
}
