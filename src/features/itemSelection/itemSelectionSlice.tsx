import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface itemState {
  items: Array<string>;
}

const initialState: itemState = {
  items: ["A", "B", "C"],
};

export const itemSelectionSlice = createSlice({
  name: "itemSelection",
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
export const {} = itemSelectionSlice.actions;

export default itemSelectionSlice.reducer;
