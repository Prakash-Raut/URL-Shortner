import { nanoid } from "nanoid";
import UrlShortnerR from "./UrlShortnerR";

export default class UrlShortnerS {
	private urlRepo: UrlShortnerR;
	constructor() {
		this.urlRepo = new UrlShortnerR();
	}

	async shortUrl(originalUrl: string): Promise<string> {
		let url = await this.urlRepo.getUrlByOriginalUrl(originalUrl);
		if (url) {
			return url.shortUrl;
		}
		let shortUrl = nanoid();
		await this.urlRepo.getUrlByShortUrl(shortUrl);
		while (url) {
			shortUrl = nanoid();
			url = await this.urlRepo.getUrlByShortUrl(shortUrl);
		}

		await this.urlRepo.createUrl(originalUrl, `urls/${shortUrl}`);
		return shortUrl;
	}

	async getAllUrls() {
		return await this.urlRepo.getAllUrls();
	}

	async getUrlByShortUrl(shortUrl: string) {
		try {
			const result = await this.urlRepo.getUrlByShortUrl(shortUrl);
			console.log("Repository Result:", result);
			return result;
		} catch (error) {
			console.error("Error in service getUrlByShortUrl:", error);
			throw error;
		}
	}
}
