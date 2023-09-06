import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  selectedItems: [],
  count: 0,
};

const compareItemSlice = createSlice({
  name: 'compareItems',
  initialState,
  reducers: {
    addItem: (state, action) => {
      if (state.count < 5) {
        state.selectedItems.push(action.payload);
        state.count++;
      }
    },
    removeItem: (state, action) => {
      const newSelectedItems = state.selectedItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.selectedItems = newSelectedItems;
      state.count--;
    },
  },
});

export default compareItemSlice.reducer;
export const { addItem, removeItem } = compareItemSlice.actions;
export const SelectQuantity = (store) => store.compareItems.count;
export const SelectedCompareItems = (store) => store.compareItems.selectedItems;
