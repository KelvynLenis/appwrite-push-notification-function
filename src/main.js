import { Client } from "node-appwrite";

export default async ({ req, res, log, error }) => {

  if (req.method !== 'POST') {
    return res.text('Not found.', 404);
  }

  // const redisClient = getRedisClient();
  const client = new Client();

  client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject(process.env.APP_WRITE_PROJECT_ID);

  try {
    const { deviceId, isStolen } = JSON.parse(req.body);

    // log(req.body)
    log(`Device ${deviceId} is stolen: ${isStolen}`);

    const databases = new sdk.Databases(client);
    databases.updateDocument(
      client,
      "673f3e7f002ac721c7f6",
      "673f3e8a0001a6d9233f",
      deviceId,
      {
        isStolen
      }
    )

    // publishMessage(client, 'notifications', 'Device stolen', deviceId, isStolen);

    return res.json({ ok: true });
  } catch (e) {
    error(e);
    return res.json({ ok: false, error: 'Failed to send the message' }, 500);
  }
};