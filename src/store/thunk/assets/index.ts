import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../../utils/axios/intex";

export const getProduct  = createAsyncThunk (
  '',
  async (data: unknown, {rejectWithValue}) => {
    try {
      const assets = await instance.get('') //url запроса
      return {name: data, data: assets.data}
    } catch (e: any) {
      if (e.responce && e.responce.data.message) {
        return rejectWithValue(e.responce.data.message)
      } else {
        return rejectWithValue(e.message)
      }
    }
  } 
)