import { instance } from './instance'

const url = 'user'

export const apiGetUser = () => {
  return instance.get(url)
}