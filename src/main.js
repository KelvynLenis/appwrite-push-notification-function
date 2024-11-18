
export default async ({ req, res, log, error }) => {
  try {
    const response = await sendPushNotification({
      notification: {
        title: 'req.bodyJson.message.title',
        body: 'req.bodyJson.message.body',
      },
      data: req.bodyJson.data ?? {},
      token: 'req.bodyJson.deviceToken',
    });

    log(`Successfully sent message: ${response}`);

    return res.json({ ok: true, messageId: response });
  } catch (e) {
    error(e);
    return res.json({ ok: false, error: 'Failed to send the message' }, 500);
  }
};