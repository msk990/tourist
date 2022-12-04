import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../app/store"

interface IngShow {
    id:string;
    open:boolean;
}
const initialState:IngShow = {
    'id':'ju',
    'open': false
}
export const selectedIngredientSlice = createSlice ({
    name: 'selectedImage',
    initialState,
    reducers: {
        changeSelectedIngredient: (state, action: PayloadAction<IngShow>) => {
            state.id = action.payload.id
            state.open = action.payload.open
            
        }
    }
})

export const { changeSelectedIngredient } = selectedIngredientSlice.actions
export const selIngredient = (state: RootState) => state.selectedIngredient
export default selectedIngredientSlice.reducer