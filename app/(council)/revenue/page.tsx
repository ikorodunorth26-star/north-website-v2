import type { Metadata } from "next";

import { RevenueView } from "@/view";

export const metadata: Metadata = {
	title: "Revenue & Payments | Ikorodu North LCDA",
	description: "Pay a demand notice, check what you owe or confirm a receipt is genuine, all in one place for Ikorodu North LCDA.",
};

const RevenuePage = () => {
	return <RevenueView />;
};

export default RevenuePage;
