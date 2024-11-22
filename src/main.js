const { publishMessage, getClient } = require('./redis.js');
const sdk = require("node-appwrite");

module.exports = async ({ req, res, log, error }) => {
  const client = new sdk.Client();

  client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject(process.env.APP_WRITE_PROJECT_ID);

  try {
    const { deviceId, isStolen } = req.body;

    log(req.body)
    // log(`Device ${deviceId} is stolen: ${isStolen}`);

    const client = getClient();

    publishMessage(client, 'notifications', 'Device stolen', deviceId, isStolen);

    return res.json({ ok: true });
  } catch (e) {
    return res.json({ ok: false, error: 'Failed to send the message' }, 500);
  }
};