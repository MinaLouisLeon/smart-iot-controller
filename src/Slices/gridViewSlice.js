import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    layoutObj : {},
    isLayoutReady : false,
};

export const gridViewSlice = createSlice({
    name : "gridViewSlice",
    initialState,
    reducers: {
        setLayoutData : (state,action) => {
            state.layoutObj = action.payload;
            state.isLayoutReady = true;
        },
    }
});

export const {setLayoutData} = gridViewSlice.actions;

export default gridViewSlice.reducer;