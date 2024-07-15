import Link from "next/link";

export default function NotFound() {
	return (
		<div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
			<div className="p-10 bg-white rounded-lg shadow-2xl max-w-4xl w-full">
				<h1 className="text-3xl font-bold mb-6 text-center text-gray-700">
					Not Found
				</h1>
                <p className="text-center text-red-500 mb-6">
                    The page you are looking for does not exist.
                </p>
				<Link
					href="/"
					className="text-center text-blue-500 hover:underline block mb-6"
				>
					Return Home
				</Link>
			</div>
		</div>
	);
}
