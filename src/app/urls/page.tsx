import Link from "next/link";

async function fetchUrls() {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_BASE_URL}/api/all-url`,
		{
			cache: "force-cache",
		}
	);

	if (!response.ok) {
		throw new Error("Failed to fetch URLs");
	}

	return response.json();
}

export default async function UrlList() {
	let urls;

	try {
		urls = await fetchUrls();
		console.log("Urls: ", urls);
	} catch (error) {
		return (
			<div className="min-h-screen flex items-center justify-center bg-gray-100">
				<div className="p-10 bg-white rounded-lg shadow-2xl max-w-4xl w-full">
					<h1 className="text-3xl font-bold mb-6 text-center text-gray-700">
						Error
					</h1>
					<p className="text-center text-red-500">
						Failed to load urls
					</p>
				</div>
			</div>
		);
	}

	return (
		<div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
			<div className="p-10 bg-white rounded-lg shadow-2xl max-w-4xl w-full">
				<h1 className="text-3xl font-bold mb-6 text-center text-gray-700">
					All Short URLs
				</h1>

				<Link
					href="/"
					className="text-blue-500 hover:underline block mb-6"
				>
					Back to Home
				</Link>

				<div className="overflow-x-auto flex justify-center items-center">
					<table className="table-auto border-separate border-spacing-5 border border-slate-500">
						<thead>
							<tr>
								<th className="border border-slate-600 text-black">
									Original Url
								</th>
								<th className="border border-slate-600 text-black">
									Short Url
								</th>
							</tr>
						</thead>
						<tbody>
							{urls.urls && urls.urls.map(
								(url: {
									_id: string;
									originalUrl: string;
									shortUrl: string;
								}) => (
									<tr key={url._id}>
										<td className="border border-slate-700 text-slate-950">
											{url.originalUrl}
										</td>
										<td className="border border-slate-700">
											<Link
												href={`/${url.shortUrl}`}
												target="_blank"
												className="text-blue-500 hover:underline"
											>
												{`${process.env.NEXT_PUBLIC_BASE_URL}/${url.shortUrl}`}
											</Link>
										</td>
									</tr>
								)
							)}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}
