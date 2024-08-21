import { createSlice } from "@reduxjs/toolkit";

export const reduxCounterSlice = createSlice({
	name: "counter",
	initialState: {
		value: 0,
	},
	reducers: {
		// Reduxは内部でImmerを使用しているため、
		// 現在のステートをそのまま使用しているように見えるが、
		// 実際は内部で新しいステートを使用している。
		increment: (state) => {
			state.value += 1;
		},
		decrement: (state) => {
			state.value -= 1;
		},
		incrementByAmount: (state, action) => {
			state.value += action.payload;
		},
	},
});

export const { increment, decrement, incrementByAmount } =
	reduxCounterSlice.actions;

export default reduxCounterSlice.reducer;
