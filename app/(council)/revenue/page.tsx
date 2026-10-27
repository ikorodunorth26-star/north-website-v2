import { JsonLd } from "@/components/reususables/site";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";
import { RevenueView } from "@/view";

export const metadata = createPageMetadata({
	title: "Revenue & Payments",
	description: "Pay a demand notice, check what you owe or confirm a receipt is genuine, all in one place for Ikorodu North LCDA.",
	path: "/revenue",
});

const RevenuePage = () => {
	return (
		<>
			<JsonLd
				data={breadcrumbJsonLd([
					{ name: "Home", path: "/" },
					{ name: "Revenue & Payments", path: "/revenue" },
				])}
			/>
			<RevenueView />
		</>
	);
};

export default RevenuePage;
