import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../app/store"

interface ImgShow {
    src:string;
    open:boolean;
}
const initialState:ImgShow = {
    'src':'ju',
    'open': false
}
export const selectedImageSlice = createSlice ({
    name: 'selectedImage',
    initialState,
    reducers: {
        changeSelectedImage: (state, action: PayloadAction<ImgShow>) => {
            state.src = action.payload.src
            state.open = action.payload.open
            
        }
    }
})

export const { changeSelectedImage } = selectedImageSlice.actions
export const selImage = (state: RootState) => state.selectedImage
export default selectedImageSlice.reducer