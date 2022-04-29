import { instance } from './instance'

const url = 'hobby'

export const apiGetHobby = (params) => {
  return instance.get(url, params)
}