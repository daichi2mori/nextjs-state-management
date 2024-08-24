import Link from "next/link";

export default function Home() {
	return (
		<main>
			<Link href={"/redux"}>Redux</Link>
			<Link href={"/zustand"}>Zustand</Link>
			<Link href={"/jotai"}>Jotai</Link>
		</main>
	);
}
