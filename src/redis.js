const updateDocument = require("./appwrite");


export async function getClient() {
  const { REDIS_PASSWORD, REDIS_HOST } = process.env;

  const client = createClient({
    password: REDIS_PASSWORD,
    socket: {
      host: REDIS_HOST,
      port: 14714
    }
  });

  await client.connect();

  return client;
}

export async function publishMessage(client, channel, message, deviceId, isStolen) {
  const redisPublisher = client.asPublisher();
  const redisSubscriber = client.asSubscriber();

  redisSubscriber.subscribe('notifications');

  redisSubscriber.on('message', async (channel, message) => {
    console.log(`Received message: ${message} from channel: ${channel}`);

    updateDocument(
      "673f3e7f002ac721c7f6",
      "673f3e8a0001a6d9233f",
      deviceId,
      {
        isStolen
      }
    )
  });

  redisPublisher.publish('notifications', message.toString());

  await client.publish(channel, message);
}