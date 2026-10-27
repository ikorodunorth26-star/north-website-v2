import { Footer, Header } from "@/components/reususables";
import { MaxWidthWrapper } from "@/lib";

export default function CouncilLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<Header />
			<MaxWidthWrapper>{children}</MaxWidthWrapper>
			<Footer />
		</>
	);
}
