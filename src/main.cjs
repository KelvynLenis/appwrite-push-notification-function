const { publishMessage, getClient } = require('./redis.cjs');

export default async ({ req, res, log, error }) => {
  try {
    const { deviceId, isStolen } = req.body;

    const client = getClient();

    publishMessage(client, 'notifications', 'Device stolen', deviceId, isStolen);

    return res.json({ ok: true });
  } catch (e) {
    return res.json({ ok: false, error: 'Failed to send the message' }, 500);
  }
};