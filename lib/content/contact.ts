export const contactPage = {
	label: "Contact",
	title: "Get in touch",
	description: "Ask a question, share feedback or report a local concern. Here's how to reach Ikorodu North LCDA.",
};

export const contactPhones = [
	{ label: "+234 816 544 2373", href: "tel:+2348165442373" },
	{ label: "+234 811 047 9658", href: "tel:+2348110479658" },
] as const;

export const contactEmails = {
	general: "info@ikorodunorthlcda.lg.gov.ng",
	administrative: "admin@ikorodunorthlcda.lg.gov.ng",
} as const;

export const enquiryTopics = ["General enquiry", "Permits & approvals", "Sanitation & waste", "Roads & drainage", "Bursary & scholarships", "Complaints & feedback"] as const;

export type EnquiryTopic = (typeof enquiryTopics)[number];
