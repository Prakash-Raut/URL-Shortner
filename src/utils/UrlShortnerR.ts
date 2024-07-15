import { dbConnect } from "@/config/dbConfig";
import UrlModel, { IUrl } from "@/models/Url";

export default class UrlShortnerR {
	private urlModel: typeof UrlModel;

	constructor() {
		dbConnect();
		this.urlModel = UrlModel;
	}

	async getUrlById(id: string): Promise<IUrl | null> {
		return await this.urlModel.findById(id).lean();
	}

	async getUrlByShortUrl(shortUrl: string): Promise<IUrl | null> {
		try {
			const result = await this.urlModel.findOne({ shortUrl }).lean();
			console.log("Database Query Result:", result);
			return result;
		} catch (error) {
			console.error("Error in repository getUrlByShortUrl:", error);
			throw error;
		}
	}

	async getUrlByOriginalUrl(originalUrl: string): Promise<IUrl | null> {
		return await this.urlModel.findOne({ originalUrl }).lean();
	}

	async getAllUrls(): Promise<IUrl | null> {
		return await this.urlModel.find().lean();
	}

	async deleteUrl(id: string): Promise<IUrl | null> {
		return await this.urlModel.findByIdAndDelete(id).lean();
	}

	async updateUrl(id: string, url: string): Promise<IUrl | null> {
		return await this.urlModel.findByIdAndUpdate(
			id,
			{ url },
			{ new: true }
		);
	}

	async createUrl(originalUrl: string, shortUrl: string): Promise<IUrl> {
		return await this.urlModel.create({ originalUrl, shortUrl });
	}
}
