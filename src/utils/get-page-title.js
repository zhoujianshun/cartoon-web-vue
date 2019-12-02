import defaultSettings from '@/settings'

const title = defaultSettings.title || '守护侠智慧社区'

export default function getPageTitle (pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
