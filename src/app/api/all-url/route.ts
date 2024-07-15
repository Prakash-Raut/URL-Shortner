import UrlShortnerS from "@/utils/UrlShortnerS";
import { NextResponse } from "next/server";
import { cache } from "react";

function fetchUrls() {
    const service = new UrlShortnerS();
    return service.getAllUrls();
}

const cachedFn = cache(fetchUrls);


export async function GET() {
	const urls = await cachedFn();
    const response = NextResponse.json({ urls });
    response.headers.set("Cache-Control", "public, max-age=60 s-maxage=60, stale-while-revalidate=60");
	return response;
}
