export const suggestProjectPage = {
	label: "Community input",
	title: "Suggest a project",
	description: "Tell the council what your street, ward or community needs. Every suggestion is logged and reviewed.",
};

export const suggestProjectSteps = [
	{
		number: "01",
		title: "Submit your suggestion",
		text: "Fill in the form with the project, location and who it would benefit.",
	},
	{
		number: "02",
		title: "Review",
		text: "Your suggestion is reviewed by [responsible department].",
	},
	{
		number: "03",
		title: "Feedback",
		text: "You receive an update on the outcome by [contact method] within [timeframe].",
	},
	{
		number: "04",
		title: "Planning",
		text: "Suitable suggestions may be considered in [planning or budget cycle].",
	},
] as const;

export const suggestProjectWards = ["Isiu", "Odogunyan", "Olorunda", "Erikorodo", "Agbala"] as const;

export const suggestProjectCategories = ["Roads & drainage", "Water", "Health", "Education", "Environment", "Markets", "Youth & sports", "Other"] as const;

export const suggestProjectTips = [
	"Be specific about the location, with a street name or landmark.",
	"Explain the problem and who it affects.",
	"Add clear photos of the site if you can.",
	"Keep to one project per suggestion.",
	"Check the Projects page in case it is already planned.",
] as const;

export const suggestProjectHelp = {
	title: "Contact [responsible department]",
	rows: [
		{ label: "Phone", value: "[department phone]" },
		{ label: "Email", value: "[department email]" },
		{ label: "Office hours", value: "[Office hours]" },
	],
} as const;

export const suggestProjectInbox = "info@ikorodunorth.gov.ng";
