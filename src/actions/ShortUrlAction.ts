"use server";

import UrlShortnerS from "@/utils/UrlShortnerS";
import { revalidatePath } from "next/cache";

export async function shortUrlAction(formData: FormData) {
	const originalUrl = formData.get("originalUrl") as string;
	const service = new UrlShortnerS();
	const shortUrl = await service.shortUrl(originalUrl);
	revalidatePath("/urls");
}
