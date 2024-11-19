const admin = require('firebase-admin');

module.exports = async ({ req, res, log, error }) => {

  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.FCM_PROJECT_ID,
      clientEmail: process.env.FCM_CLIENT_EMAIL,
      privateKey: process.env.FCM_PRIVATE_KEY.replace(/\\n/g, '\n'),
    }),
    databaseURL: process.env.FCM_DATABASE_URL,
  });

  try {
    const payload = {
      notification: {
        title: "req.bodyJson.message.title",
        body: "req.bodyJson.message.body",
      },
      data: req.bodyJson.data ?? {},
      token: "req.bodyJson.deviceToken",
    }

    await admin.messaging().send(payload);
    return res.json({ ok: true, messageId: response });
  } catch (e) {
    return res.json({ ok: false, error: 'Failed to send the message' }, 500);
  }
};