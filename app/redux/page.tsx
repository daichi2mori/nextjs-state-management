"use client";

import { useDispatch, useSelector } from "react-redux";
import {
	decrement,
	increment,
	incrementByAmount,
} from "../features/counter/redux-counter-slice";
import type { RootState } from "../providers/redux-provider";

const Pages = () => {
	const count = useSelector((state: RootState) => state.counter.value);
	const dispath = useDispatch();

	return (
		<div>
			<h1>Counter: {count}</h1>
			<button type="button" onClick={() => dispath(increment())}>
				Increment
			</button>
			<button type="button" onClick={() => dispath(decrement())}>
				Decrement
			</button>
			<button type="button" onClick={() => dispath(incrementByAmount(5))}>
				Increment By 5
			</button>
		</div>
	);
};

export default Pages;
