import { instance } from './instance'

const url = 'goal'

export const apiGetGoal = () => {
  return instance.get(url)
}