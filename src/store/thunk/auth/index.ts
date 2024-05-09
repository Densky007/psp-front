import { createAsyncThunk } from "@reduxjs/toolkit";
import { ILoginData, IRegisterData } from "../../../common/types/auth";
import { instance } from "../../../utils/axios/intex";

export const loginUser = createAsyncThunk(
  'auth/login',
  async (data: ILoginData, {rejectWithValue}) => {
    try {
      const user = await instance.post ('auth/login', data) //url запроса к бэку
      sessionStorage.setItem('token', user.data.token)
      return user.data
    } catch (e: any){
      if (e.responce && e.responce.data.message) {
        return rejectWithValue(e.responce.data.message)
      } else {
        alert ('Ошибка соединения с сервером')
        return rejectWithValue(e.message)
      }
    }
  }
)

export const registerUser = createAsyncThunk(
  'auth/register',
  async (data: IRegisterData, {rejectWithValue}) => {
    try {
      const user = await instance.post ('auth/register', data) //url запроса к бэку
      sessionStorage.setItem('token', user.data.token)
      return user.data
    } catch (e: any){
      if (e.responce && e.responce.data.message) {
        return rejectWithValue(e.responce.data.message)
      } else {
        alert ('Ошибка соединения с сервером')
        return rejectWithValue(e.message)
      }
    }
  }
)