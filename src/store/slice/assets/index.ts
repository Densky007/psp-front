import { createSlice } from "@reduxjs/toolkit"
import { getProduct } from "../../thunk/assets"

const initialState: any  = {
  assets: [],
  favoriteAssets: []
}

export const assetSlice = createSlice({
  name: 'assets',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getProduct.fulfilled, (state, action) => {
      state.favoriteAssets = action.payload
    }) 
  }
})

export default assetSlice.reducer