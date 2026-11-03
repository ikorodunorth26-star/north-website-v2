export const contactPage = {
	label: "Contact",
	title: "Get in touch",
	description: "Ask a question, share feedback or report a local concern. Here's how to reach Ikorodu North LCDA.",
};

export const contactPhones = [
	{ label: "08165442373 (24hrs)", href: "tel:+2348165442373" },
	{ label: "08110479658", href: "tel:+2348110479658" },
	{ label: "09066063640", href: "tel:+2349066063640" },
] as const;

export const contactEmails = {
	general: "info@ikorodunorthlcda.lg.gov.ng",
	administrative: "admin@ikorodunorthlcda.lg.gov.ng",
} as const;

export const enquiryTopics = ["General enquiry", "Permits & approvals", "Sanitation & waste", "Roads & drainage", "Bursary & scholarships", "Complaints & feedback"] as const;

export type EnquiryTopic = (typeof enquiryTopics)[number];
