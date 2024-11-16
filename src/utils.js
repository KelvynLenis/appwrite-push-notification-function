import { Client } from "node-appwrite";

const client = new sdk.Client();

const messaging = new sdk.Messaging(client);

client
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject(process.env.PROJECT_ID)         // Your project ID
    .setKey(process.env.API_SECRET_KEY)         // Your secret API key

export function throwIfMissing(obj, keys) {
    const missing = [];
    for (let key of keys) {
        if (!(key in obj) || !obj[key]) {
            missing.push(key);
        }
    }
    if (missing.length > 0) {
        throw new Error(`Missing required fields: ${missing.join(', ')}`);
    }
}


export async function sendPushNotification({ notification }) {
    return messaging.createPush(
        '23823y4237y472834',                          // messageId
        notification.title,                               // title
        notification.body,                                // body
        ['6737e16c00091ac03260'],
    );
}
