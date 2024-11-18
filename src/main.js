import admin from 'firebase-admin';

export default async ({ req, res, log, error }) => {
  const serviceAccount = require("path/to/serviceAccountKey.json");

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: process.env.FCM_DATABASE_URL,
  });

  try {
    await admin.messaging().send("payload");
    return res.json({ ok: true, messageId: response });
  } catch (e) {
    return res.json({ ok: false, error: 'Failed to send the message' }, 500);
  }
};