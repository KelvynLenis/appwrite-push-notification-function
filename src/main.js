import { publishMessage, getClient } from './redis.js';
import { Client } from "node-appwrite";

export default async ({ req, res, log, error }) => {

  if (req.method !== 'POST') {
    return res.text('Not found.', 404);
  }

  const client = new Client();

  client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject(process.env.APP_WRITE_PROJECT_ID);

  try {
    const { deviceId, isStolen } = JSON.parse(req.body);

    // log(req.body)
    log(`Device ${deviceId} is stolen: ${isStolen}`);

    const client = getClient();

    publishMessage(client, 'notifications', 'Device stolen', deviceId, isStolen);

    return res.json({ ok: true });
  } catch (e) {
    return res.json({ ok: false, error: 'Failed to send the message' }, 500);
  }
};