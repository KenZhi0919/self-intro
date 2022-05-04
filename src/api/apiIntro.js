import { instance } from './instance'

const url = 'intro'

export const apiGetIntro = () => {
  return instance.get(url)
}