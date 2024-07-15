import mongoose from "mongoose";

type ConnectionObject = {
	isConnected?: number;
};

const connection: ConnectionObject = {};

export async function dbConnect(): Promise<void> {
	if (connection.isConnected) {
		console.log("Already connected to Database");
		return;
	}

	try {
		const db = await mongoose.connect(process.env.MONGODB_URI || "", {});
		// console.log(db);

		connection.isConnected = db.connections[0].readyState;

		console.log("DB connected successfully");
	} catch (error) {
		console.log("DB connection failed", error);
		process.exit(1);
	}
}
