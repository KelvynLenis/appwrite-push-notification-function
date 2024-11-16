import { Client } from "node-appwrite";

export default async ({ req, res, log, error }) => {
  const client = new Client();

  const messaging = new client.Messaging(client);

  client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject(process.env.PROJECT_ID)
    .setKey(process.env.API_SECRET_KEY)

  try {
    const response = await messaging.createPush(
      '23823y4237y472834',
      'Alerta',
      'Alerta de celular roubado',
      ['6737e16c00091ac03260'],
    );

    log(`Successfully sent message: ${response}`);

    return res.json({ ok: true, messageId: response });
  } catch (e) {
    error(e);
    return res.json({ ok: false, error: 'Failed to send the message' }, 500);
  }
};