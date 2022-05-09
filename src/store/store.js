import create from 'zustand'
import { apiGetUser } from '../api/apiUser'


const useStore = create(set => ({
  user: {},
  useAnimation: false,
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
  setUseAnimation: (isHome) => {
    set({
      useAnimation: isHome
    })
  }
}))

export default useStore