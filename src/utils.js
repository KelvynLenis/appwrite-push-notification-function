import admin from 'firebase-admin';

admin.initializeApp({
  credential: admin.credential.cert({
    projectId: process.env.FCM_PROJECT_ID,
    clientEmail: process.env.FCM_CLIENT_EMAIL,
    privateKey: process.env.FCM_PRIVATE_KEY,
  }),
  databaseURL: process.env.FCM_DATABASE_URL,
});

export async function sendPushNotification(payload) {
  try {
    return await admin.messaging().send(payload);
  } catch (e) {
    throw "error on messaging ";
  }
}