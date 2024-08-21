"use client";

import { useZustandCounter } from "../features/counter/zustand-counter";

const Page = () => {
	const count = useZustandCounter((state) => state.count);
	const increment = useZustandCounter((state) => state.increment);
	const decrement = useZustandCounter((state) => state.decrement);
	const incrementByAmount = useZustandCounter(
		(state) => state.incrementByAmount,
	);

	return (
		<div>
			<h1>Counter: {count}</h1>
			<button type="button" onClick={increment}>
				Increment
			</button>
			<button type="button" onClick={decrement}>
				Decrement
			</button>
			<button type="button" onClick={() => incrementByAmount(5)}>
				Increment By 5
			</button>
		</div>
	);
};

export default Page;
