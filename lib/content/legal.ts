export type LegalSection = {
	heading: string;
	paragraphs: string[];
};

export type LegalDocument = {
	slug: "privacy-policy" | "accessibility" | "terms-of-use";
	label: string;
	title: string;
	description: string;
	updated: string;
	sections: LegalSection[];
};

const updated = "27 October 2026";

export const legalDocuments = {
	"privacy-policy": {
		slug: "privacy-policy",
		label: "Legal",
		title: "Privacy policy",
		description: "How Ikorodu North LCDA handles information when you use ikorodunorthlcda.lg.gov.ng.",
		updated,
		sections: [
			{
				heading: "Who is responsible",
				paragraphs: [
					"This website is published by Ikorodu North Local Council Development Area. The secretariat is at Ikorodu–Shagamu Road, Isiu, Ikorodu, Lagos 104101.",
					"Questions about this policy, or a request about your personal information, can be sent to info@ikorodunorthlcda.lg.gov.ng or admin@ikorodunorthlcda.lg.gov.ng. You can also call +234 816 544 2373 or +234 811 047 9658.",
				],
			},
			{
				heading: "What this website is",
				paragraphs: [
					"The site gives public information about the council, its wards, projects, news and services. It does not ask you to create an account, and it does not keep a database of the messages you write in its forms.",
				],
			},
			{
				heading: "Information you send us",
				paragraphs: [
					"The contact form asks for your full name, email address, enquiry topic and message. Phone number and ward are optional. The project suggestion form asks for your full name, phone number, ward, project category, title, location and description. Email address, who would benefit, and photographs are optional.",
					"Sending either form opens your own email program, addressed to info@ikorodunorthlcda.lg.gov.ng, with the details you entered written into the message. The website does not transmit that message to a council server and does not store a copy of it. If you choose photographs for a project suggestion, those files stay on your device. The email lists their names so you can attach the pictures yourself before you send.",
					"Once you send the email, the council receives it as ordinary correspondence and uses it to reply, to look into the enquiry, or to consider the project suggestion. We do not sell personal information.",
				],
			},
			{
				heading: "Information collected as you browse",
				paragraphs: [
					"The site does not use advertising cookies and does not ask you to sign in. Your browser may still store the address of pages you open, in its own history.",
					"The map of Ikorodu North loads map tiles from OpenStreetMap. That request goes to OpenStreetMap, which has its own privacy policy. A link to the council Facebook page leaves this website. Facebook’s own terms then apply.",
				],
			},
			{
				heading: "How long correspondence is kept",
				paragraphs: [
					"Email you send to the council is kept for as long as the enquiry, suggestion or record requires, and then according to the council’s ordinary records practice. You can ask what correspondence we hold about you, ask for a correction, or ask us to delete it where the law allows. Send that request to info@ikorodunorthlcda.lg.gov.ng.",
					"The Nigeria Data Protection Act 2023 applies to personal information the council holds. This page is the public notice of how this website deals with that information.",
				],
			},
		],
	},
	accessibility: {
		slug: "accessibility",
		label: "Legal",
		title: "Accessibility",
		description: "How to use ikorodunorthlcda.lg.gov.ng if you use a keyboard, a screen reader, or a reduced-motion setting.",
		updated,
		sections: [
			{
				heading: "What you can expect",
				paragraphs: [
					"Ikorodu North LCDA wants this website to be usable by residents, including people with disabilities. Pages are built so they can be read in a logical order, moved through with a keyboard, and understood without relying on colour alone.",
					"Links and buttons show a visible focus ring. Photographs that carry the story have a text alternative. Decorative marks are hidden from screen readers. Where a heading types on, a reduced-motion setting in your device shows the full heading at once instead.",
				],
			},
			{
				heading: "Pages and forms",
				paragraphs: [
					"The main navigation, the footer, and each page heading use the same order on every page. Form fields are labelled. If a required field is empty, the form says what is missing before it opens your email program.",
					"On a phone, the five wards are a list. Each ward name opens that community’s page. On a larger screen, choosing a ward changes the photograph beside the list.",
				],
			},
			{
				heading: "If something is in the way",
				paragraphs: [
					"If a page, document, photograph or form is hard to use, write to info@ikorodunorthlcda.lg.gov.ng. Tell us the page address, what you were trying to do, and the assistive tool you use if you use one. We will reply with the information in another form, or correct the page.",
					"You can also call +234 816 544 2373 or +234 811 047 9658, or visit the secretariat at Ikorodu–Shagamu Road, Isiu, Ikorodu, Lagos 104101.",
					"We are working toward the Web Content Accessibility Guidelines 2.2, level AA. This page does not claim that every part of the site already meets that standard. A barrier you report is how we find what still needs to be fixed.",
				],
			},
		],
	},
	"terms-of-use": {
		slug: "terms-of-use",
		label: "Legal",
		title: "Terms of use",
		description: "The terms for reading and using the official website of Ikorodu North LCDA.",
		updated,
		sections: [
			{
				heading: "Using this website",
				paragraphs: [
					"These terms apply to ikorodunorthlcda.lg.gov.ng, published by Ikorodu North Local Council Development Area. By using the site you accept these terms. If you do not accept them, do not use the site.",
					"The site is for public information: the council, its wards, its news, its projects, and how to reach an office. It is not a filing office for permits, payments or court papers. A form on this site opens an email. It does not lodge an application by itself.",
				],
			},
			{
				heading: "Information on the site",
				paragraphs: [
					"We take care that names, dates and project accounts match the council’s published record. A page can still be updated, corrected or removed. Official decisions are those of the council, not a sentence on a web page.",
					"Nothing on this site is legal, financial or professional advice. For a decision about your own matter, contact the office named on the relevant page, or write to info@ikorodunorthlcda.lg.gov.ng.",
				],
			},
			{
				heading: "What you may not do",
				paragraphs: [
					"Do not misuse the site. That includes trying to break it, to scrape it in a way that disrupts it, to pretend a message comes from the council, or to send unlawful, threatening or misleading material through its forms.",
					"You are responsible for the truth of what you put in an enquiry or a project suggestion, and for sending that email from your own account.",
				],
			},
			{
				heading: "Copyright and other sites",
				paragraphs: [
					"Text, the council crest, and photographs published by the council on this site belong to Ikorodu North LCDA unless a caption says otherwise. You may share a link, or quote a short passage with credit to the council and a link to the page. You may not copy the site, the crest, or a photograph for a commercial use without written permission from the council.",
					"Links to Facebook and to OpenStreetMap leave this website. Those sites have their own terms. A link is not an endorsement of everything on the other site.",
				],
			},
			{
				heading: "Liability and the law",
				paragraphs: [
					"The council is not liable for loss that comes from using the site, from a page being unavailable, or from relying on it as the only record of a council decision, except where the law does not allow that limit.",
					"These terms are governed by the laws of the Federal Republic of Nigeria. The secretariat is at Ikorodu–Shagamu Road, Isiu, Ikorodu, Lagos 104101.",
				],
			},
		],
	},
} as const satisfies Record<LegalDocument["slug"], LegalDocument>;

export const legalDocumentList = [legalDocuments["privacy-policy"], legalDocuments.accessibility, legalDocuments["terms-of-use"]] as const;

export const getLegalDocument = (slug: LegalDocument["slug"]) => legalDocuments[slug];
