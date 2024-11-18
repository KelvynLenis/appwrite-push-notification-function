// import admin from 'firebase-admin';

// admin.initializeApp({
// 	credential: admin.credential.cert({
// 		projectId: process.env.FCM_PROJECT_ID,
// 		clientEmail: process.env.FCM_CLIENT_EMAIL,
// 		privateKey: process.env.FCM_PRIVATE_KEY,
// 	}),
// 	databaseURL: process.env.FCM_DATABASE_URL,
// });

// export function throwIfMissing(obj, keys) {
// 	const missing = [];
// 	for (let key of keys) {
// 		if (!(key in obj) || !obj[key]) {
// 			missing.push(key);
// 		}
// 	}
// 	if (missing.length > 0) {
// 		throw new Error(`Missing required fields: ${missing.join(', ')}`);
// 	}
// }

// export async function sendPushNotification(payload) {
// 	try {
// 		return await admin.messaging().send(payload);
// 	} catch (e) {
// 		throw "error on messaging ";
// 	}
// }
