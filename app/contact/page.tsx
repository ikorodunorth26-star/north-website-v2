import type { Metadata } from "next";

import { ContactView } from "@/view";

export const metadata: Metadata = {
	title: "Contact | Ikorodu North LCDA",
	description: "Ask a question, share feedback or report a local concern. Here's how to reach Ikorodu North LCDA.",
};

const ContactPage = () => {
	return <ContactView />;
};

export default ContactPage;
