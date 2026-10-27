export const revenueOfficeEmail = "revenue@ikorodunorthlcda.lg.gov.ng";

export const revenueIntents = ["notice", "bills", "receipt"] as const;

export type RevenueIntent = (typeof revenueIntents)[number];

export const revenueLookupTabs: { id: RevenueIntent; label: string; placeholder: string }[] = [
	{
		id: "notice",
		label: "Pay a notice",
		placeholder: "Enter demand notice number, RIN or receipt number",
	},
	{
		id: "bills",
		label: "Check my bills",
		placeholder: "Enter your RIN",
	},
	{
		id: "receipt",
		label: "Verify a payment",
		placeholder: "Enter your receipt number",
	},
];

export const revenueActions: { intent: RevenueIntent; title: string; description: string }[] = [
	{
		intent: "notice",
		title: "Pay a demand notice",
		description: "Enter the number on your demand notice and pay your bill securely online.",
	},
	{
		intent: "bills",
		title: "Check my bills",
		description: "Use your RIN to see your demand notices, balances and due dates.",
	},
	{
		intent: "receipt",
		title: "Verify a payment",
		description: "Confirm a payment is genuine using the receipt number on the receipt.",
	},
];

export const revenueSteps = [
	{
		label: "STEP 1",
		title: "Find your notice",
		description: "Locate the demand notice number or RIN on the notice delivered to your property.",
	},
	{
		label: "STEP 2",
		title: "Review your bill",
		description: "Check the revenue type, amount, period and due date before you pay.",
	},
	{
		label: "STEP 3",
		title: "Pay securely",
		description: "Choose card, bank transfer or USSD and complete your payment.",
	},
	{
		label: "STEP 4",
		title: "Get your receipt",
		description: "Receive a receipt by SMS and email, and download a printable copy.",
	},
];

export const revenueQuestions: { question: string; answer?: string }[] = [
	{
		question: "What is a demand notice and why did I receive one?",
		answer: "[Answer to be provided by the Revenue Office.]",
	},
	{ question: "I have lost my demand notice. How can I pay?" },
	{ question: "How do I get my receipt after paying?" },
	{ question: "How can I check that a receipt is genuine?" },
	{ question: "What happens if I pay after the due date?" },
];

export const isRevenueIntent = (value: string | null): value is RevenueIntent =>
	revenueIntents.some((intent) => intent === value);
