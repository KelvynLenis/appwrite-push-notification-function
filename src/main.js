import { Client, Databases } from "node-appwrite";
import { getRedisClient, publishMessage } from "./redis.js";

export default async ({ req, res, log, error }) => {

  if (req.method !== 'POST') {
    return res.text('Not found.', 404);
  }

  log(`APP_WRITE_PROJECT_ID: ${process.env._APP_WRITE_PROJECT_ID}`);

  const redisClient = getRedisClient();
  const client = new Client();

  client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject(process.env._APP_WRITE_PROJECT_ID)
    .setKey(process.env._APP_API_KEY);

  const db = new Databases(client);
  log(db)
  log(`X-Appwrite-Project: ${req.headers['x-appwrite-project']}`);

  try {
    const { deviceId, isStolen } = JSON.parse(req.body);

    // log(req.body)
    log(`Device ${deviceId} is stolen: ${isStolen}`);


    // (await redisClient).set('deviceId', deviceId);
    const response = await db.updateDocument(
      "673f3e7f002ac721c7f6",
      "673f3e8a0001a6d9233f",
      deviceId,
      {
        isStolen
      }
    )

    // publishMessage(redisClient, 'notifications', 'Device stolen', deviceId, isStolen, log);

    return res.json({ ok: true });
  } catch (e) {
    error(e);
    return res.json({ ok: false, error: 'Failed to send the message' }, 500);
  }
};