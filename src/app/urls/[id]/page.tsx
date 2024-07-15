import UrlShortnerS from "@/utils/UrlShortnerS";
import { redirect } from "next/navigation";

async function fetchOriginalUrl(url: string) {
	try {
        const service = new UrlShortnerS();
        const response = await service.getUrlByShortUrl(url);
        console.log("Service Response: ", response);
        return response?.originalUrl;
    } catch (error) {
        console.error("Error fetching original URL:", error);
        return null;
    }
}

type UrlRedirectProps = {
	params: { id: string };
};

export default async function UrlRedirect({ params }: UrlRedirectProps) {
	console.log("Params: ", params.id);	
	const originalUrl = await fetchOriginalUrl(`urls/${params.id}`);
	console.log("Original URL: ", originalUrl);
	if (originalUrl) {
		redirect(originalUrl);
	} else {
		redirect("/404");
	}
	return null;
}
