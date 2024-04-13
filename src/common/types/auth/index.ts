export interface IPropsLogin {
  setPassword: (value: string) => void
  setEmail: (value: string) => void
  navigate: (to: string) => void
}

export interface IPropsRegister {
  setRepeatPassword: (value: string) => void
  setPassword: (value: string) => void
  setEmail: (value: string) => void
  navigate: (to: string) => void
}

export interface IAuthState {
  user: IPublicUser
  isLogged: boolean
}

export interface IPublicUser {
  id: number | null
  email: string
  createdAt: string
  updatedAt: string
  watchList: [IWatchList]
}

interface IWatchList {
  id: number | null
  email: string
  createdAt: string
  updatedAt: string
  user: number | null
}