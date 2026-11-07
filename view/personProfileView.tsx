import { PersonProfileSection } from "@/components/reususables/government";
import type { PersonProfile } from "@/lib/content/people";

type PersonProfileViewProps = {
	person: PersonProfile;
};

const PersonProfileView = ({ person }: PersonProfileViewProps) => {
	return <PersonProfileSection person={person} />;
};

export default PersonProfileView;
