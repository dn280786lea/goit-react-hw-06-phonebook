import { createSlice } from '@reduxjs/toolkit';

const filtersInitialState = {
  filter: '',
};

const filtersSlice = createSlice({
  name: 'filter',
  initialState: filtersInitialState,
  reducers: {
    setStatusFilter(state, action) {
      state.status = action.payload;
    },
  },
});

export const { setStatusFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
