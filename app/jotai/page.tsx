"use client";

import { useAtom } from "jotai";
import { countAtom } from "../features/counter/jotai-counter";

const Page = () => {
	const [count, setCount] = useAtom(countAtom);

	const increment = () => setCount((c) => c + 1);

	return (
		<div>
			<h1>Counter: {count}</h1>
			<button type="button" onClick={() => increment()}>
				Increment
			</button>
		</div>
	);
};

export default Page;
