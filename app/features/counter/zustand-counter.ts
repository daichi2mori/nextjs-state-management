import { create } from "zustand";

type State = {
	count: number;
};

type Action = {
	increment: () => void;
	decrement: () => void;
	incrementByAmount: (amount: number) => void;
};

export const useZustandCounter = create<State & Action>()((set) => ({
	count: 0,
	increment: () => set((state) => ({ count: state.count + 1 })),
	decrement: () => set((state) => ({ count: state.count - 1 })),
	incrementByAmount: (amount: number) =>
		set((state) => ({ count: state.count + amount })),
}));
