import UrlShortnerS from "@/utils/UrlShortnerS";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
	const { originalUrl } = await req.json();
	const service = new UrlShortnerS();
	const shortUrl = await service.shortUrl(originalUrl);
	return NextResponse.json({ shortUrl }, { status: 201 });
}