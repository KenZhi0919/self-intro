import create from 'zustand'

const useStore = create(set => ({
  user: '',
  login: (user) => { set({ user: user }) },
  logOut: () => { set({ user: '' }) },
}))

export default useStore