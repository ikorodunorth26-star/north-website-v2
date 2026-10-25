import { NewsroomSection } from "@/components/reususables";
import { PageIntro } from "@/components/reususables/site";
import { featuredArticle, newsArticles } from "@/lib/content/news";

const NewsView = () => {
	return (
		<>
			<PageIntro
				label="Public Record"
				title="News & Updates"
				description="Official announcements, project updates and community programmes from your Local Council Development Area."
			/>
			<NewsroomSection featuredArticle={featuredArticle} articles={newsArticles} />
		</>
	);
};

export default NewsView;
