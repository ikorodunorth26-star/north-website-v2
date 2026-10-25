import { ContactSection } from "@/components/reususables/contact";
import { PageIntro } from "@/components/reususables/site";
import { contactPage } from "@/lib/content/contact";

const ContactView = () => {
	return (
		<>
			<PageIntro label={contactPage.label} title={contactPage.title} description={contactPage.description} />
			<ContactSection />
		</>
	);
};

export default ContactView;
