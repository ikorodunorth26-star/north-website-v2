import Link from "next/link";

import { legalDocumentList, type LegalDocument } from "@/lib/content/legal";

const LegalDocumentBody = ({ document }: { document: LegalDocument }) => {
	const others = legalDocumentList.filter((item) => item.slug !== document.slug);

	return (
		<section className="bg-background py-16 lg:py-20">
			<div className="mx-auto w-full max-w-council px-5 md:px-10 min-[1408px]:px-0">
				<article className="max-w-[760px]">
					<p className="text-sm font-medium leading-5 text-council-subtle">Updated {document.updated}</p>
					<div className="mt-10 space-y-10">
						{document.sections.map((section) => (
							<section key={section.heading}>
								<h2 className="text-[26px] font-bold leading-8 text-council-green md:text-[32px] md:leading-10">{section.heading}</h2>
								<div className="mt-4 space-y-4 text-base leading-7 text-council-subtle lg:text-lg lg:leading-8">
									{section.paragraphs.map((paragraph) => (
										<p key={paragraph}>{paragraph}</p>
									))}
								</div>
							</section>
						))}
					</div>
				</article>
				<nav aria-label="Other legal pages" className="mt-14 flex flex-col gap-3 border-t border-council-border pt-8 sm:flex-row sm:gap-8">
					{others.map((item) => (
						<Link key={item.slug} href={`/${item.slug}`} className="text-base font-bold text-council-green underline-offset-4 hover:text-council-gold hover:underline focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring">
							{item.title}
						</Link>
					))}
				</nav>
			</div>
		</section>
	);
};

export default LegalDocumentBody;
