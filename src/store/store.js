import create from 'zustand'
import { apiGetUser } from '../api/apiUser'

const useStore = create(set => ({
  user: {},
  setUser: async () => {
    try {
      const { data } = await apiGetUser()
      set({
        user: data
      })
    } catch (e) {
      console.log(e)
    }
  },
}))

export default useStore