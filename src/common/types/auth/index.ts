import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form"

export interface IPropsLogin<
TFieldValues extends FieldValues = FieldValues,
TContext = any
> {
  navigate: (to: string) => void
  register: UseFormRegister<TFieldValues>
  errors: FieldErrors<TFieldValues>
}

export interface IPropsRegister<
TFieldValues extends FieldValues = FieldValues,
TContext = any
> {
  navigate: (to: string) => void
  register: UseFormRegister<TFieldValues>
  errors: FieldErrors<TFieldValues>
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

export interface ILoginData {
  email: string
  password: string
}

export interface IRegisterData {
  email: string
  password: string
}