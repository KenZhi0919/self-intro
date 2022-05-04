import { instance } from './instance'

const url = 'experience'

export const apiGetExperience = () => {
  return instance.get(url)
}