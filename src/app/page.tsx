import { shortUrlAction } from "@/actions/ShortUrlAction";
import Link from "next/link";

export default function Home() {
	return (
		<main className="flex flex-col items-center justify-between min-h-screen p-24 bg-gray-300">
			<div className="p-10 bg-white rounded-lg shadow-2xl max-w-lg">
				<h1 className="text-3xl font-bold tracking-tight mb-6 text-center text-gray-700">
					URL Shorty
				</h1>

				<form
					action={shortUrlAction}
					className="space-y-6"
				>
					<input
						type="text"
						placeholder="Enter a long url"
						name="originalUrl"
						className="w-full text-black p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
					/>

					<button
						type="submit"
						className="w-full text-white font-semibold bg-blue-500 hover:bg-blue-600 p-4 rounded-lg"
					>
						Shorten URL
					</button>
				</form>

				<div className="mt-5">
					<Link
						href="/urls"
						className="text-blue-500 hover:underline"
					>
						View All Short URLs
					</Link>
				</div>
			</div>
		</main>
	);
}
