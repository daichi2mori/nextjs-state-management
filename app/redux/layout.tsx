import { ReduxProvider } from "../providers/redux-provider";

export default function ReduxLayout({
	children,
}: { children: React.ReactNode }) {
	return <ReduxProvider>{children}</ReduxProvider>;
}
