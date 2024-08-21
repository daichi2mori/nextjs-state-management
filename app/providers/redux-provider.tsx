"use client";

import { configureStore } from "@reduxjs/toolkit";
import type { ReactNode } from "react";
import { Provider } from "react-redux";
import reduxCounterReducer from "../features/counter/redux-counter-slice";

const store = configureStore({
	reducer: {
		counter: reduxCounterReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;

export const ReduxProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	// Providerを使用するには use client が必要
	return <Provider store={store}>{children}</Provider>;
};
