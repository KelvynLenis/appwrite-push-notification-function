import * as sdk from "node-appwrite";

export default async ({ req, res, log, error }) => {
  const client = new sdk.Client();

  const messaging = new sdk.Messaging(client);

  client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject(process.env.PROJECT_ID)
    .setKey(process.env.API_SECRET_KEY)

  // if (req.path === "/") {
  //   // Use res object to respond with text(), json(), or binary()
  //   // Don't forget to return a response!
  //   return res.render("login");
  // }

  try {
    const response = await messaging.createPush(
      '23823y4237y472834',
      'Alerta',
      'Alerta de celular roubado',
      ['6737dee2001ae4d5578e'],
    );

    log(`Successfully sent message: ${response}`);

    return res.json({ ok: true, messageId: response });
  } catch (e) {
    error(e);
    return res.json({ ok: false, error: 'Failed to send the message' }, 500);
  }
};