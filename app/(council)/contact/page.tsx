import { contactPage } from "@/lib/content/contact";
import { JsonLd } from "@/components/reususables/site";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";
import { ContactView } from "@/view";

export const metadata = createPageMetadata({
	title: "Contact",
	description: contactPage.description,
	path: "/contact",
});

const ContactPage = () => {
	return (
		<>
			<JsonLd
				data={breadcrumbJsonLd([
					{ name: "Home", path: "/" },
					{ name: "Contact", path: "/contact" },
				])}
			/>
			<ContactView />
		</>
	);
};

export default ContactPage;
