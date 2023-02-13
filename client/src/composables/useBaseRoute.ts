import { computed, ComputedRef } from 'vue'
import { Link, LinkRouteEnum, TaskLink } from '../components/Link'
import { useTypeChecker } from '../lib/useTypeChecker'
import { useLocale } from './useLocale'

const { localeRoute } = useLocale()
const { isTaskLink } = useTypeChecker()

export const useBaseRoute = () => {
  return (link: Link | TaskLink): ComputedRef<string> =>
    computed<string>(() => {
      if (link.type === 'task' && isTaskLink(link)) {
        return `${localeRoute.value}/${LinkRouteEnum.Board}${
          (link as TaskLink)?.board?.id
        }/${link.prefix}-${link.id}`
      }
      if (link.type === 'board') {
        return `${localeRoute.value}/${LinkRouteEnum.Board + link.id}`
      }
      if (link.type === 'user') {
        return `${localeRoute.value}/${LinkRouteEnum.User + link.id}`
      }
      return ''
    })
}
